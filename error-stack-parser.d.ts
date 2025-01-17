// Type definitions for ErrorStackParser v2.0.0
// Project: https://github.com/stacktracejs/error-stack-parser
// Definitions by: Eric Wendelin <https://www.eriwen.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import StackFrame from "stackframe";

declare namespace ErrorStackParser {
    export type {StackFrame};
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    function parse(error: Error): StackFrame[];
}

export default ErrorStackParser;
