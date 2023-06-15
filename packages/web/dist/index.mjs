import { Pattern as a, evalScope as i, controls as l } from "@strudel.cycles/core";
export * from "@strudel.cycles/core";
import { registerSynthSounds as u, initAudioOnFirstClick as p, webaudioScheduler as s } from "@strudel.cycles/webaudio";
export * from "@strudel.cycles/webaudio";
import { evaluate as c } from "@strudel.cycles/transpiler";
export * from "@strudel.cycles/transpiler";
import { miniAllStrings as m } from "@strudel.cycles/mini";
export * from "@strudel.cycles/mini";
export * from "@strudel.cycles/tonal";
async function f() {
  const t = i(
    i,
    l,
    import("@strudel.cycles/core"),
    import("@strudel.cycles/mini"),
    import("@strudel.cycles/tonal"),
    import("@strudel.cycles/webaudio"),
    { hush: h, evaluate: w }
  );
  await Promise.all([
    t,
    u()
    /* , registerSoundfonts() */
  ]);
}
let n, o;
function d(t = {}) {
  p(), m();
  const { prebake: e, ...r } = t;
  n = (async () => {
    await f(), await e?.();
  })(), o = s(r);
}
window.initStrudel = d;
a.prototype.play = function() {
  if (!o)
    throw new Error(".play: no scheduler found. Have you called init?");
  return n.then(() => {
    o.setPattern(this, !0);
  }), this;
};
function h() {
  o.stop();
}
async function w(t, e = !0) {
  const { pattern: r } = await c(t);
  e && r.play();
}
export {
  f as defaultPrebake,
  w as evaluate,
  h as hush,
  d as initStrudel
};
