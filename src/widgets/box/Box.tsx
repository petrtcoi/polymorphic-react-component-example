import {
  forwardRef,
  type ComponentPropsWithRef,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react"

import { type PolymorphicRef } from "@/shared/types"

const DEFAULT_ELEMENT = "div"

/** Component's Props */
type BasicProps<T extends ElementType = ElementType> = {
  as?: T
  children: ReactNode
}

/** Helper types for Polymorphic */
type BoxProps<T extends ElementType> = BasicProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof BasicProps> &
  CSSProperties

type BoxType = <T extends ElementType = typeof DEFAULT_ELEMENT>(
  props: BoxProps<T>
) => ReactNode

/** Component */
const Box: BoxType = forwardRef(
  <T extends ElementType = typeof DEFAULT_ELEMENT>(
    props: BoxProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const { as = DEFAULT_ELEMENT, children, ...options } = props

    const HtmlTag = as

    return (
      <HtmlTag
        ref={ref}
        style={{ ...options }}
        {...options}
      >
        {children}
      </HtmlTag>
    )
  }
)

export default Box
