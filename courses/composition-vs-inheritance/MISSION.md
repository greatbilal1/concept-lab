# Mission — Composition vs Inheritance

## Why this course exists

'Favor object composition over class inheritance' is the most famous design advice from the Gang of Four's 1994 classic book. Yet generations of developers still fall into the inheritance trap: building rigid 8-level class hierarchies (Animal &rarr; Mammal &rarr; Canine &rarr; Dog &rarr; HuntingDog) that shatter the moment requirements change. This course explores why class inheritance is the tightest form of coupling in object-oriented programming, how the Fragile Base Class problem strikes, and how composition ('has-a') provides flexible, dynamic behavior reuse.

## What the learner can do at the end

- Distinguish 'is-a' relationships (inheritance) from 'has-a' relationships (composition).
- Identify and avoid the Fragile Base Class problem and deep inheritance tree hierarchies.
- Refactor brittle subclass hierarchies into modular, composable component models.
- Apply the Liskov Substitution Principle (LSP) to ensure subclasses remain genuinely substitutable.
- Implement mixins, traits, and strategy delegation to reuse behavior without derivation.

## What this course is NOT

- Not an anti-OOP manifesto. Inheritance has legitimate uses (framework bases, AST nodes).
- Not a language-specific feature walkthrough. It focuses on object-oriented architectural design.

## Success looks like

When designing a system with polymorphic behaviors (like characters in a game or payment processors in a store), the learner chooses composition by default, modeling capabilities as pluggable components rather than rigid subclass trees.
