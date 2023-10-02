import { renderHook } from "@testing-library/react-hooks";
import useDebounce from "../../hooks/useDebounce";

test("debounces the value", async () => {
  const { result } = renderHook(() => useDebounce("test", 300));

  expect(result.current).toBe("test");

  await new Promise((resolve) => setTimeout(resolve, 300));

  expect(result.current).toBe("test");
});
