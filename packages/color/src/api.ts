import { float } from "@thi.ng/strings/float";
import { percent } from "@thi.ng/strings/percent";
import { ReadonlyVec, Vec } from "@thi.ng/vectors3/api";

export type Color = Vec;
export type ReadonlyColor = ReadonlyVec;

export type ColorMatrix = [
    number, number, number, number, number,
    number, number, number, number, number,
    number, number, number, number, number,
    number, number, number, number, number
];

export type CosCoeffs = [number, number, number, number];
export type CosGradientSpec = [CosCoeffs, CosCoeffs, CosCoeffs, CosCoeffs];

export enum ColorMode {
    RGBA,
    HCYA,
    HSVA,
    HSLA,
    HSIA,
    INT32,
    CSS,
    XYZA,
    YCBCRA
}

export interface IColor {
    readonly mode: ColorMode;
}

// RGBA constants

export const BLACK = Object.freeze([0, 0, 0, 1]);
export const WHITE = Object.freeze([1, 1, 1, 1]);

export const RED = Object.freeze([1, 0, 0, 1]);
export const GREEN = Object.freeze([0, 1, 0, 1]);
export const BLUE = Object.freeze([0, 0, 1, 1]);

export const CYAN = Object.freeze([0, 1, 1, 1]);
export const MAGENTA = Object.freeze([1, 0, 1, 1]);
export const YELLOW = Object.freeze([1, 1, 0, 1]);

export const RGB_LUMINANCE = [0.299, 0.587, 0.114];

export const SRGB_GAMMA = 1.0 / 2.2;
export const SRGB_INVERSE_GAMMA = 2.2;
export const SRGB_ALPHA = 0.055;

export const RGB_XYZ = [
    0.4124564, 0.3575761, 0.1804375,
    0.2126729, 0.7151522, 0.0721750,
    0.0193339, 0.1191920, 0.9503041
];

export const XYZ_RGB = [
    3.2404542, -1.5371385, -0.4985314,
    -0.9692660, 1.8760108, 0.0415560,
    0.0556434, -0.2040259, 1.0572252
];

// internal helpers

export const FF = float(2);
export const PC = percent(2);
export const INV8BIT = 1 / 0xff;
