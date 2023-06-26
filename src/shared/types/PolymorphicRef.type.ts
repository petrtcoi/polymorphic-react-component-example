import { type ComponentPropsWithRef, type ElementType } from "react";

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"]
