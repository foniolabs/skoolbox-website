// The SkoolBox logo — a stack of books — as a small toon-shaded 3D object
// with ink outlines (inverted hull) to match the site's sticker style.
// Loaded with a dynamic import only on devices that pass `canRun3D()`.

import {
  BackSide,
  BoxGeometry,
  BufferGeometry,
  Color,
  CylinderGeometry,
  DataTexture,
  DirectionalLight,
  Group,
  HemisphereLight,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshToonMaterial,
  NearestFilter,
  PerspectiveCamera,
  RedFormat,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const INK = 0x1e1b33;
const GREEN = 0x25632d; // logo green
const ORANGE = 0xf9943b; // logo orange
const PAGES = 0xfff7ed;
const INDIGO = 0x4f46e5;
const SUN = 0xfacc15;

export function mountBooks(container: HTMLElement, onFirstFrame: () => void): () => void {
  const geometries: BufferGeometry[] = [];
  const materials: Material[] = [];
  const track = <T extends BufferGeometry | Material>(x: T): T => {
    if (x instanceof Material) materials.push(x);
    else geometries.push(x);
    return x;
  };

  // 3-step toon ramp for flat, illustrated shading.
  const ramp = new DataTexture(new Uint8Array([90, 170, 255]), 3, 1, RedFormat);
  ramp.minFilter = ramp.magFilter = NearestFilter;
  ramp.needsUpdate = true;

  const outlineMat = track(new MeshBasicMaterial({ color: INK, side: BackSide }));
  const toon = (color: number) => track(new MeshToonMaterial({ color: new Color(color), gradientMap: ramp }));

  /** Mesh plus a slightly larger back-face copy that reads as an ink outline. */
  const outlined = (geo: BufferGeometry, color: number, outline = 1.05) => {
    const g = new Group();
    g.add(new Mesh(track(geo), toon(color)));
    const hull = new Mesh(geo, outlineMat);
    hull.scale.setScalar(outline);
    g.add(hull);
    return g;
  };

  const book = (w: number, h: number, d: number, color: number) => {
    const g = new Group();
    g.add(outlined(new RoundedBoxGeometry(w, h, d, 3, 0.09), color, 1.04));
    // Pages peek out of the front and right edges.
    const pages = new Mesh(track(new BoxGeometry(w * 0.9, h * 0.62, d * 0.94)), toon(PAGES));
    pages.position.set(w * 0.06, 0, d * 0.04);
    g.add(pages);
    return g;
  };

  const stack = new Group();
  const b1 = book(2.8, 0.55, 1.9, GREEN);
  const b2 = book(2.5, 0.5, 1.75, ORANGE);
  b2.position.y = 0.56;
  b2.rotation.y = 0.2;
  const b3 = book(2.2, 0.46, 1.6, GREEN);
  b3.position.y = 1.07;
  b3.rotation.y = -0.14;
  stack.add(b1, b2, b3);

  // Graduation cap on top.
  const cap = new Group();
  const board = outlined(new BoxGeometry(1.5, 0.09, 1.5), INDIGO, 1.06);
  board.position.y = 0.3;
  const crown = outlined(new CylinderGeometry(0.46, 0.52, 0.32, 24), INDIGO, 1.06);
  crown.position.y = 0.12;
  const tassel = outlined(new SphereGeometry(0.11, 16, 12), SUN, 1.15);
  tassel.position.set(0.62, 0.12, 0.62);
  cap.add(board, crown, tassel);
  cap.position.y = 1.4;
  cap.rotation.set(-0.12, Math.PI / 4 + 0.2, 0.08);
  stack.add(cap);
  stack.position.y = -0.75;

  const scene = new Scene();
  const root = new Group();
  root.add(stack);
  scene.add(root);
  scene.add(new HemisphereLight(0xffffff, 0xffe7c2, 1.5));
  const key = new DirectionalLight(0xffffff, 2);
  key.position.set(3, 5, 4);
  scene.add(key);

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 1.6, 9);
  camera.lookAt(0, 0.1, 0);

  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  // Tilt toward the pointer (eased), plus a slow idle sway and float.
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  let first = true;
  const start = performance.now();
  const frame = () => {
    const t = (performance.now() - start) / 1000;
    current.x += (target.x - current.x) * 0.06;
    current.y += (target.y - current.y) * 0.06;
    root.rotation.y = -0.5 + Math.sin(t * 0.5) * 0.25 + current.x * 0.45;
    root.rotation.x = 0.12 + current.y * 0.12;
    root.position.y = Math.sin(t * 1.1) * 0.08;
    renderer.render(scene, camera);
    if (first) {
      first = false;
      onFirstFrame();
    }
  };

  // Only animate while visible on screen and the tab is in front.
  let onScreen = true;
  const sync = () => renderer.setAnimationLoop(onScreen && !document.hidden ? frame : null);
  const io = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  });
  io.observe(container);
  document.addEventListener("visibilitychange", sync);
  sync();

  return () => {
    renderer.setAnimationLoop(null);
    io.disconnect();
    ro.disconnect();
    document.removeEventListener("visibilitychange", sync);
    window.removeEventListener("pointermove", onPointer);
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    ramp.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
