import { type RefObject, useCallback, useEffect, useRef } from "react";

export function useMouseDown(ref: RefObject<HTMLElement>) {
	const mouseDownRef = useRef(false);

	const handleMouseDown = useCallback(() => {
		mouseDownRef.current = true;
	}, []);

	const handleMouseUp = useCallback(() => {
		mouseDownRef.current = false;
	}, []);

	useEffect(() => {
		const el = ref.current;
		if (el) {
			el.addEventListener("mousedown", handleMouseDown);
			el.addEventListener("mouseup", handleMouseUp);

			return () => {
				el.removeEventListener("mousedown", handleMouseDown);
				el.removeEventListener("mouseup", handleMouseUp);
			};
		}
	}, [ref, handleMouseDown, handleMouseUp]);

	return mouseDownRef;
}
