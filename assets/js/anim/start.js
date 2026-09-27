/* ============================================================
   Concept Lab — animation bootstrap
   ------------------------------------------------------------
   One place that starts every explainer animation on any page.

   Any element with a `data-anim` attribute is a stage. The scene
   is looked up in `window.ExplainerScenes` using the namespace
   from `data-anim-scope` (falling back to <body data-course>,
   then "hub"). So:

     <div class="sec-stage" data-anim="OopInheritance"></div>
     <div class="stage"     data-anim="Composition"></div>

   both work, on any page, with no per-page code.

   Optional attributes
     data-anim-scope="oop"   force a namespace
     data-anim-duration=8000 scene duration in ms (default 6000)
     data-anim-once          play a single pass instead of looping

   The module is idempotent: a stage is only ever started once,
   and it re-scans whenever the renderer emits
   "conceptlab:rendered", so dynamically built stages are picked
   up automatically.
   ============================================================ */
(function (global) {
  "use strict";

  var DEFAULT_DURATION = 6000;

  /** Which scene namespace does this stage belong to? */
  function scopeFor(stage) {
    if (stage.dataset.animScope) return stage.dataset.animScope;
    if (document.body && document.body.dataset.course) {
      return document.body.dataset.course;
    }
    return "hub";
  }

  /** Start every not-yet-started stage inside `root`. */
  function start(root) {
    if (!global.Explainer || !global.ExplainerScenes) return 0;
    var host = root || document;
    var stages = host.querySelectorAll("[data-anim]");
    var started = 0;

    for (var i = 0; i < stages.length; i++) {
      var stage = stages[i];
      if (stage.dataset.started) continue;

      var scenes = global.ExplainerScenes[scopeFor(stage)];
      if (!scenes) continue;

      var scene = scenes[stage.dataset.anim];
      if (!scene) continue;

      var duration = parseInt(stage.dataset.animDuration, 10);
      if (isNaN(duration) || duration <= 0) duration = DEFAULT_DURATION;

      stage.dataset.started = "1";
      global.Explainer.createStage(stage, [scene], {
        duration: duration,
        once: stage.hasAttribute("data-anim-once"),
      });
      started++;
    }
    return started;
  }

  /** Stop and clear every stage inside `root`. */
  function stop(root) {
    var host = root || document;
    var stages = host.querySelectorAll("[data-anim]");
    for (var i = 0; i < stages.length; i++) {
      var stage = stages[i];
      if (stage.__xaStage && stage.__xaStage.destroy) {
        stage.__xaStage.destroy();
      }
      delete stage.dataset.started;
      delete stage.__xaStage;
    }
  }

  /* Re-scan whenever the renderer rebuilds part of the page. */
  document.addEventListener("conceptlab:rendered", function () {
    start(document);
  });

  global.Animations = { start: start, stop: stop, scopeFor: scopeFor };
})(window);
