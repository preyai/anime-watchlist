export default function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timeoutId: number | null = null;
    return (...args: any[]) => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => func(...args), delay);
    };
  }
  