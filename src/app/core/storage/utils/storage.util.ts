export function storageAvailable(
  type: "localStorage" | "sessionStorage",
): boolean {
  let storage;

  if (typeof window === "undefined") {
    return false;
  }

  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        (e.name === "NS_ERROR_DOM_QUOTA_REACHED" &&
          !!storage &&
          storage.length !== 0))
    );
  }
}
