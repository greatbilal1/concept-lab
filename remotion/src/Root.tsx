import React from "react";
import { Composition } from "remotion";
import { VIDEO, LOOP_FRAMES } from "./theme";
import {
  MentalModels,
  StateBehavior,
  Abstraction,
  Composition as CompositionExplainer,
  Experimentation,
  DesignTradeoffs,
} from "./Concepts";
import {
  MentalModel,
  ClassVsObject,
  SelfAttributes,
  InitMethod,
  Methods,
  Encapsulation,
  Inheritance,
  Polymorphism,
  AbstractionOOP,
  CompositionOOP,
  DunderMethods,
  Properties,
  MethodKinds,
  Dataclasses,
  DesignSystem,
  KycRiskModel,
  KnowledgeCheck,
  ExperimentLab,
  CheatSheet,
} from "./OopConcepts";

/**
 * Every explainer is registered as its own composition so it can be rendered
 * to an individual MP4 and dropped into the site.
 *
 * `Concept*`  -> the six general concept-explorer cards on index.html
 * `Oop*`      -> the per-section explainers on oop_interactive_course.html
 */
export const RemotionRoot: React.FC = () => {
  const common = {
    width: VIDEO.width,
    height: VIDEO.height,
    fps: VIDEO.fps,
    durationInFrames: LOOP_FRAMES,
  };

  return (
    <>
      {/* ---- Concept Lab hub (index.html) ---- */}
      <Composition id="MentalModels" component={MentalModels} {...common} />
      <Composition id="StateBehavior" component={StateBehavior} {...common} />
      <Composition id="Abstraction" component={Abstraction} {...common} />
      <Composition id="Composition" component={CompositionExplainer} {...common} />
      <Composition id="Experimentation" component={Experimentation} {...common} />
      <Composition id="DesignTradeoffs" component={DesignTradeoffs} {...common} />

      {/* ---- OOP course (oop_interactive_course.html) ---- */}
      <Composition id="OopMentalModel" component={MentalModel} {...common} />
      <Composition id="OopClassVsObject" component={ClassVsObject} {...common} />
      <Composition id="OopSelfAttributes" component={SelfAttributes} {...common} />
      <Composition id="OopInitMethod" component={InitMethod} {...common} />
      <Composition id="OopMethods" component={Methods} {...common} />
      <Composition id="OopEncapsulation" component={Encapsulation} {...common} />
      <Composition id="OopInheritance" component={Inheritance} {...common} />
      <Composition id="OopPolymorphism" component={Polymorphism} {...common} />
      <Composition id="OopAbstraction" component={AbstractionOOP} {...common} />
      <Composition id="OopComposition" component={CompositionOOP} {...common} />
      <Composition id="OopDunderMethods" component={DunderMethods} {...common} />
      <Composition id="OopProperties" component={Properties} {...common} />
      <Composition id="OopMethodKinds" component={MethodKinds} {...common} />
      <Composition id="OopDataclasses" component={Dataclasses} {...common} />
      <Composition id="OopDesignSystem" component={DesignSystem} {...common} />
      <Composition id="OopKycRiskModel" component={KycRiskModel} {...common} />
      <Composition id="OopKnowledgeCheck" component={KnowledgeCheck} {...common} />
      <Composition id="OopExperimentLab" component={ExperimentLab} {...common} />
      <Composition id="OopCheatSheet" component={CheatSheet} {...common} />
    </>
  );
};
