import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4">a. When should you use context API?</h2>
  <p class="mb-2">
    Context API is a feature of React that can be used when you need to pass data through the component tree
    without the need to pass props down manually at every level. This is especially useful when you have
    multiple levels of nested components that need access to the same data, as it can help reduce the amount
    of prop drilling that occurs.
  </p>

  <h2 class="text-2xl font-bold mb-4">b. What is a custom hook?</h2>
  <p class="mb-2">
    A custom hook is a function that allows you to encapsulate logic and state in a reusable way. Custom hooks
    are useful when you have logic that needs to be shared between multiple components or when you want to
    abstract away complex logic into a more manageable form.
  </p>

  <h2 class="text-2xl font-bold mb-4">c. What is useRef?</h2>
  <p class="mb-2">
    useRef is a hook that allows you to create a mutable reference that persists across component re-renders.
    This can be useful when you need to access or modify a DOM element or other value that is preserved across
    re-renders, without triggering a re-render when the value changes.
  </p>

  <h2 class="text-2xl font-bold mb-4">d. What is useMemo?</h2>
  <p class="mb-2">
    useMemo is a hook that allows you to memoize a function's return value and avoid re-computing it on every
    render. This can be useful when you have expensive computations that don't need to be re-run unless
    certain dependencies change, such as when filtering or sorting large arrays of data.
  </p>
</div>

        </div>
    );
};

export default Blog;