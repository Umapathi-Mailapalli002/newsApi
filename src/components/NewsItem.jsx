import React from "react";

function NewsItem({ urlToImage, url, title, description, author, publishedAt, source }) {
  return (
    <div className="w-full">
      <div className="relative bg-white dark:bg-stone-900 rounded-lg shadow-lg overflow-hidden dark:shadow-cyan-600 transition-transform duration-300 ease-in-out hover:shadow-xl">
        <img className="w-full h-auto opacity-80" src={urlToImage} alt="news" />
        <div className="p-4">
          <h2 className="text-gray-700 text-xl dark:text-white font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-2">
            {description?.slice(0,100)}{"..."}
            <a
              className="text-slate-400 hover:text-gray-800 dark:text-cyan-500 p-1"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </p>
          <span className="text-gray-500 text-xs flex items-center space-x-2 mb-2">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-cyan-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z" />
            </svg>
            <span>{author}</span>
          </span>
          <span className="text-gray-500 text-xs flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-cyan-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412" />
            </svg>
            <span className="">{publishedAt}</span>
          </span>
          <span className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
            {source}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
