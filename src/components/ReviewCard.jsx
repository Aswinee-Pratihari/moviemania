import React from "react";

const ReviewCard = ({ data }) => {
  return (
    <div class=" gap-6 text-center ">
      <div className="w-[300px]">
        <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div class="p-6">
            <h4 class="mb-4 text-2xl font-semibold">{data?.author}</h4>
            <hr />
            <p class="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              {data?.content.slice(0, 200)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
