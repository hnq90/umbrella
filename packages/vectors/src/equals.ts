import { equivArrayLike } from "@thi.ng/equiv";
import { MultiVecOpRoVV } from "./api";
import { vop } from "./internal/vop";

export const equals: MultiVecOpRoVV<boolean> = vop(0);

equals.add(2, (a, b) => a[0] === b[0] && a[1] === b[1]);
equals.add(3, (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
equals.add(
    4,
    (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]
);
equals.default(equivArrayLike);