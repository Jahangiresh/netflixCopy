import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/movies", async (req, res, ctx) => {
    return res(
      ctx.status(200, "mocked"),
      ctx.json({
        // categories: [
        //   {
        //     categoryName: "Action",
        //     movies: [
        //       {
        //         id: 1,
        //         name: "The Avengers",
        //         content: "https://www.example.com/the_avengers.mp4",
        //         coverImg:
        //           "https://image.winudf.com/v2/image/Y29tLnN1bmFydG8uYXZlbmdlcnMyMDE4X3NjcmVlbl8wXzE1MjU3MzE0NTVfMDUy/screen-0.webp?fakeurl=1&type=.webp",
        //       },
        //       {
        //         id: 2,
        //         name: "Die Hard",
        //         content: "https://www.example.com/die_hard.mp4",
        //         coverImg:
        //           "https://e1.pxfuel.com/desktop-wallpaper/838/766/desktop-wallpaper-die-hard-with-a-vengeance-die-hard-movies-thumbnail.jpg",
        //       },
        //       {
        //         id: 3,
        //         name: "Mad Max: Fury Road",
        //         content: "https://www.example.com/mad_max.mp4",
        //         coverImg:
        //           "https://c4.wallpaperflare.com/wallpaper/768/781/199/mad-max-fury-road-movies-car-mad-max-wallpaper-preview.jpg",
        //       },
        //       {
        //         id: 4,
        //         name: "John Wick",
        //         content: "https://www.example.com/john_wick.mp4",
        //         coverImg:
        //           "https://c4.wallpaperflare.com/wallpaper/250/718/341/red-background-drawing-john-wick-black-clothing-digital-art-hd-wallpaper-preview.jpg",
        //       },
        //       {
        //         id: 42,
        //         name: "The Avengers",
        //         content: "https://www.example.com/the_avengers.mp4",
        //         coverImg:
        //           "https://image.winudf.com/v2/image/Y29tLnN1bmFydG8uYXZlbmdlcnMyMDE4X3NjcmVlbl8wXzE1MjU3MzE0NTVfMDUy/screen-0.webp?fakeurl=1&type=.webp",
        //       },
        //       {
        //         id: 43,
        //         name: "Die Hard",
        //         content: "https://www.example.com/die_hard.mp4",
        //         coverImg:
        //           "https://e1.pxfuel.com/desktop-wallpaper/838/766/desktop-wallpaper-die-hard-with-a-vengeance-die-hard-movies-thumbnail.jpg",
        //       },
        //     ],
        //   },
        //   {
        //     categoryName: "Comedy",
        //     movies: [
        //       {
        //         id: 5,
        //         name: "Superbad",
        //         content: "https://www.example.com/superbad.mp4",
        //         coverImg:
        //           "https://e0.pxfuel.com/wallpapers/250/838/desktop-wallpaper-superbad-thumbnail.jpg",
        //       },
        //       {
        //         id: 6,
        //         name: "The Hangover",
        //         content: "https://www.example.com/the_hangover.mp4",
        //         coverImg:
        //           "https://e1.pxfuel.com/desktop-wallpaper/552/959/desktop-wallpaper-the-hangover.jpg",
        //       },
        //       {
        //         id: 7,
        //         name: "Anchorman",
        //         content: "https://www.example.com/anchorman.mp4",
        //         coverImg:
        //           "https://picfiles.alphacoders.com/723/thumb-72394.jpg",
        //       },
        //       {
        //         id: 8,
        //         name: "Bridesmaids",
        //         content: "https://www.example.com/bridesmaids.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_.jpg",
        //       },
        //       {
        //         id: 45,
        //         name: "Superbad",
        //         content: "https://www.example.com/superbad.mp4",
        //         coverImg:
        //           "https://e0.pxfuel.com/wallpapers/250/838/desktop-wallpaper-superbad-thumbnail.jpg",
        //       },
        //       {
        //         id: 46,
        //         name: "The Hangover",
        //         content: "https://www.example.com/the_hangover.mp4",
        //         coverImg:
        //           "https://e1.pxfuel.com/desktop-wallpaper/552/959/desktop-wallpaper-the-hangover.jpg",
        //       },
        //     ],
        //   },
        //   {
        //     categoryName: "Drama",
        //     movies: [
        //       {
        //         id: 9,
        //         name: "The Shawshank Redemption",
        //         content: "https://www.example.com/shawshank_redemption.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        //       },
        //       {
        //         id: 10,
        //         name: "Forrest Gump",
        //         content: "https://www.example.com/forrest_gump.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        //       },
        //       {
        //         id: 11,
        //         name: "The Godfather",
        //         content: "https://www.example.com/the_godfather.mp4",
        //         coverImg:
        //           "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE/60c9f53e91b4212ca06af390/IMAGE_2_3_XL.jpg",
        //       },
        //       {
        //         id: 12,
        //         name: "Titanic",
        //         content: "https://www.example.com/titanic.mp4",
        //         coverImg:
        //           "https://w0.peakpx.com/wallpaper/652/510/HD-wallpaper-titanic-movie.jpg",
        //       },
        //       {
        //         id: 110,
        //         name: "Forrest Gump",
        //         content: "https://www.example.com/forrest_gump.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        //       },
        //       {
        //         id: 111,
        //         name: "The Godfather",
        //         content: "https://www.example.com/the_godfather.mp4",
        //         coverImg:
        //           "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE/60c9f53e91b4212ca06af390/IMAGE_2_3_XL.jpg",
        //       },
        //     ],
        //   },
        //   {
        //     categoryName: "Science Fiction",
        //     movies: [
        //       {
        //         id: 13,
        //         name: "Blade Runner",
        //         content: "https://www.example.com/blade_runner.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        //       },
        //       {
        //         id: 14,
        //         name: "The Matrix",
        //         content: "https://www.example.com/the_matrix.mp4",
        //         coverImg:
        //           "https://cdn11.bigcommerce.com/s-df4cz/images/stencil/1280x1280/products/9958/10575/matrixreloaded__00089.1478103603.jpg?c=2",
        //       },
        //       {
        //         id: 15,
        //         name: "Inception",
        //         content: "https://www.example.com/inception.mp4",
        //         coverImg: "https://wallpaperaccess.com/full/2959590.jpg",
        //       },
        //       {
        //         id: 16,
        //         name: "Interstellar",
        //         content: "https://www.example.com/interstellar.mp4",
        //         coverImg:
        //           "https://c4.wallpaperflare.com/wallpaper/923/620/32/interstellar-movie-wallpaper-preview.jpg",
        //       },
        //       {
        //         id: 135,
        //         name: "Blade Runner",
        //         content: "https://www.example.com/blade_runner.mp4",
        //         coverImg:
        //           "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        //       },
        //       {
        //         id: 145,
        //         name: "The Matrix",
        //         content: "https://www.example.com/the_matrix.mp4",
        //         coverImg:
        //           "https://cdn11.bigcommerce.com/s-df4cz/images/stencil/1280x1280/products/9958/10575/matrixreloaded__00089.1478103603.jpg?c=2",
        //       },
        //     ],
        //   },
        // ],
        categories: [
          {
            categoryName: "Action",
            movies: [
              {
                id: 1,
                name: "The Avengers",
                content: "https://www.example.com/the_avengers.mp4",
                coverImg:
                  "https://image.winudf.com/v2/image/Y29tLnN1bmFydG8uYXZlbmdlcnMyMDE4X3NjcmVlbl8wXzE1MjU3MzE0NTVfMDUy/screen-0.webp?fakeurl=1&type=.webp",
                series: [
                  {
                    id: 101,
                    name: "The Avengers Series 1",
                    content: "https://www.example.com/the_avengers_series1.mp4",
                  },
                  {
                    id: 102,
                    name: "The Avengers Series 2",
                    content: "https://www.example.com/the_avengers_series2.mp4",
                  },
                  {
                    id: 103,
                    name: "The Avengers Series 3",
                    content: "https://www.example.com/the_avengers_series3.mp4",
                  },
                ],
              },
              {
                id: 2,
                name: "Die Hard",
                content: "https://www.example.com/die_hard.mp4",
                coverImg:
                  "https://e1.pxfuel.com/desktop-wallpaper/838/766/desktop-wallpaper-die-hard-with-a-vengeance-die-hard-movies-thumbnail.jpg",
                series: [
                  {
                    id: 201,
                    name: "Die Hard Series 1",
                    content: "https://www.example.com/die_hard_series1.mp4",
                  },
                  {
                    id: 202,
                    name: "Die Hard Series 2",
                    content: "https://www.example.com/die_hard_series2.mp4",
                  },
                  {
                    id: 203,
                    name: "Die Hard Series 3",
                    content: "https://www.example.com/die_hard_series3.mp4",
                  },
                ],
              },
              {
                id: 3,
                name: "Mad Max: Fury Road",
                content: "https://www.example.com/mad_max.mp4",
                coverImg:
                  "https://c4.wallpaperflare.com/wallpaper/768/781/199/mad-max-fury-road-movies-car-mad-max-wallpaper-preview.jpg",
                series: [
                  {
                    id: 301,
                    name: "Mad Max Series 1",
                    content: "https://www.example.com/mad_max_series1.mp4",
                  },
                  {
                    id: 302,
                    name: "Mad Max Series 2",
                    content: "https://www.example.com/mad_max_series2.mp4",
                  },
                  {
                    id: 303,
                    name: "Mad Max Series 3",
                    content: "https://www.example.com/mad_max_series3.mp4",
                  },
                ],
              },
              {
                id: 4,
                name: "John Wick",
                content: "https://www.example.com/john_wick.mp4",
                coverImg:
                  "https://c4.wallpaperflare.com/wallpaper/250/718/341/red-background-drawing-john-wick-black-clothing-digital-art-hd-wallpaper-preview.jpg",
                series: [
                  {
                    id: 401,
                    name: "John Wick Series 1",
                    content: "https://www.example.com/john_wick_series1.mp4",
                  },
                  {
                    id: 402,
                    name: "John Wick Series 2",
                    content: "https://www.example.com/john_wick_series2.mp4",
                  },
                  {
                    id: 403,
                    name: "John Wick Series 3",
                    content: "https://www.example.com/john_wick_series3.mp4",
                  },
                ],
              },
            ],
          },
          {
            categoryName: "Comedy",
            movies: [
              {
                id: 5,
                name: "Superbad",
                content: "https://www.example.com/superbad.mp4",
                coverImg:
                  "https://e0.pxfuel.com/wallpapers/250/838/desktop-wallpaper-superbad-thumbnail.jpg",
                series: [
                  {
                    id: 501,
                    name: "Superbad Series 1",
                    content: "https://www.example.com/superbad_series1.mp4",
                  },
                  {
                    id: 502,
                    name: "Superbad Series 2",
                    content: "https://www.example.com/superbad_series2.mp4",
                  },
                  {
                    id: 503,
                    name: "Superbad Series 3",
                    content: "https://www.example.com/superbad_series3.mp4",
                  },
                ],
              },
              {
                id: 6,
                name: "The Hangover",
                content: "https://www.example.com/the_hangover.mp4",
                coverImg:
                  "https://e1.pxfuel.com/desktop-wallpaper/552/959/desktop-wallpaper-the-hangover.jpg",
                series: [
                  {
                    id: 601,
                    name: "The Hangover Series 1",
                    content: "https://www.example.com/the_hangover_series1.mp4",
                  },
                  {
                    id: 602,
                    name: "The Hangover Series 2",
                    content: "https://www.example.com/the_hangover_series2.mp4",
                  },
                  {
                    id: 603,
                    name: "The Hangover Series 3",
                    content: "https://www.example.com/the_hangover_series3.mp4",
                  },
                ],
              },
              {
                id: 7,
                name: "Anchorman",
                content: "https://www.example.com/anchorman.mp4",
                coverImg:
                  "https://picfiles.alphacoders.com/723/thumb-72394.jpg",
                series: [
                  {
                    id: 701,
                    name: "Anchorman Series 1",
                    content: "https://www.example.com/anchorman_series1.mp4",
                  },
                  {
                    id: 702,
                    name: "Anchorman Series 2",
                    content: "https://www.example.com/anchorman_series2.mp4",
                  },
                  {
                    id: 703,
                    name: "Anchorman Series 3",
                    content: "https://www.example.com/anchorman_series3.mp4",
                  },
                ],
              },
              {
                id: 8,
                name: "Bridesmaids",
                content: "https://www.example.com/bridesmaids.mp4",
                coverImg:
                  "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_.jpg",
                series: [
                  {
                    id: 801,
                    name: "Bridesmaids Series 1",
                    content: "https://www.example.com/bridesmaids_series1.mp4",
                  },
                  {
                    id: 802,
                    name: "Bridesmaids Series 2",
                    content: "https://www.example.com/bridesmaids_series2.mp4",
                  },
                  {
                    id: 803,
                    name: "Bridesmaids Series 3",
                    content: "https://www.example.com/bridesmaids_series3.mp4",
                  },
                ],
              },
            ],
          },
        ],

        isSuccess: true,
      })
    );
  })
);

worker.start();
