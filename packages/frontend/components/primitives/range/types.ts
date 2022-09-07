import type { Component, ReactNode } from "react";

export interface RangeProps {
    value: number;
    offset: number;
    ref: ReactNode;
}

export interface StyledRangeProps {
    allowCross: boolean; 
    handle: Component;
    value: number;
}
