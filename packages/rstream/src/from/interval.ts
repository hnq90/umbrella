import { CloseMode, CommonOpts } from "../api";
import { Stream } from "../stream";
import { optsWithID } from "../utils/idgen";

export interface FromIntervalOpts extends CommonOpts {
    /**
     * If given, only the stated number of values will be emitted (in
     * the `[0...num)` interval) and the stream will become inactive (or
     * close) after.
     *
     * @defaultValue Infinity
     */
    num: number;
}

/**
 * Returns a new `Stream` of monotonically increasing counter values,
 * emitted at given `delay` interval and up to the optionally defined
 * max value (default: ∞), after which the stream is closed. The stream
 * only starts when the first subscriber becomes available.
 *
 * @param delay
 * @param count
 * @param opts
 */
export const fromInterval = (
    delay: number,
    opts?: Partial<FromIntervalOpts>
) => {
    opts = optsWithID("interval", <FromIntervalOpts>{ num: Infinity, ...opts });
    return new Stream<number>((stream) => {
        let i = 0;
        let count = opts!.num!;
        stream.next(i++);
        let id = setInterval(() => {
            stream.next(i++);
            if (--count <= 0) {
                clearInterval(id);
                stream.closeIn !== CloseMode.NEVER && stream.done();
            }
        }, delay);
        return () => clearInterval(id);
    }, opts);
};
