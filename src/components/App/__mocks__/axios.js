jest.unmock('axios');
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from "../../../define";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet(API_URL).reply(200, {
    data: [
        {
            type: "gif",
            id: "PGANWO8Ml9q3lQ6zai",
            url: "https://giphy.com/gifs/nba-PGANWO8Ml9q3lQ6zai",
            slug: "nba-PGANWO8Ml9q3lQ6zai",
            bitly_gif_url: "https://gph.is/g/4Vy9b01",
            bitly_url: "https://gph.is/g/4Vy9b01",
            embed_url: "https://giphy.com/embed/PGANWO8Ml9q3lQ6zai",
            username: "nba",
            source: "",
            title: "Nba Playoffs Sport GIF by NBA",
            rating: "g",
            content_url: "",
            source_tld: "",
            source_post_url: "",
            is_sticker: 0,
            import_datetime: "2021-07-12 00:52:48",
            trending_datetime: "2021-07-12 03:29:34",
            images: {
                original: {
                    height: "169",
                    width: "300",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "264230",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "187352",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "16",
                    hash: "2e158e6c95d25e64f2d33282c77c5b07"
                },
                downsized: {
                    height: "169",
                    width: "300",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_large: {
                    height: "169",
                    width: "300",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "169",
                    width: "300",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "168",
                    width: "300",
                    mp4_size: "138844",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "169",
                    width: "300",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "355",
                    size: "536333",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "156761",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "221344",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "355",
                    size: "215770",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "121018",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "178",
                    size: "166626",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "56883",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "89262",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "178",
                    size: "15022",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "355",
                    size: "39617",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "113",
                    width: "200",
                    size: "211263",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "65855",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "102704",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "113",
                    width: "200",
                    size: "81698",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "47398",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "57",
                    width: "100",
                    size: "63301",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "24130",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "37520",
                    webp: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "57",
                    width: "100",
                    size: "5203",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "113",
                    width: "200",
                    size: "18953",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "3183823",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "169",
                    width: "300",
                    size: "40143",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "270",
                    width: "480",
                    mp4_size: "264230",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "100",
                    width: "178",
                    mp4_size: "35019",
                    mp4: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "49",
                    width: "87",
                    size: "46492",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "90",
                    width: "160",
                    size: "47404",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "270",
                    width: "480",
                    size: "518817",
                    url: "https://media2.giphy.com/media/PGANWO8Ml9q3lQ6zai/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media3.giphy.com/avatars/nba/GPeEGlo2uy2Z.jpg",
                banner_image: "https://media3.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",
                banner_url: "https://media3.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",
                profile_url: "https://giphy.com/nba/",
                username: "nba",
                display_name: "NBA",
                description: "This is the official NBA channel on GIPHY. All of the basketball GIFS!!",
                instagram_url: "https://instagram.com/nba",
                website_url: "",
                is_verified: true
            },
            analytics_response_payload: "e=Z2lmX2lkPVBHQU5XTzhNbDlxM2xRNnphaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVBHQU5XTzhNbDlxM2xRNnphaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVBHQU5XTzhNbDlxM2xRNnphaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVBHQU5XTzhNbDlxM2xRNnphaSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        },
        {
            type: "gif",
            id: "LGBKlgMCKQbkDKcG4t",
            url: "https://giphy.com/gifs/happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            slug: "happy-birthday-wishes-heart-LGBKlgMCKQbkDKcG4t",
            bitly_gif_url: "https://gph.is/g/ZPqAO1r",
            bitly_url: "https://gph.is/g/ZPqAO1r",
            embed_url: "https://giphy.com/embed/LGBKlgMCKQbkDKcG4t",
            username: "dotdave",
            source: "https://www.3danimatedgifs.com/",
            title: "Happy Birthday GIF",
            rating: "g",
            content_url: "",
            source_tld: "www.3danimatedgifs.com",
            source_post_url: "https://www.3danimatedgifs.com/",
            is_sticker: 0,
            import_datetime: "2020-12-12 13:49:22",
            trending_datetime: "0000-00-00 00:00:00",
            images: {
                original: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g",
                    webp_size: "1105902",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.webp&ct=g",
                    frames: "40",
                    hash: "ad4a581fabcc1403c99511735aa47d2b"
                },
                downsized: {
                    height: "320",
                    width: "320",
                    size: "1550048",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized.gif&ct=g"
                },
                downsized_large: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_medium: {
                    height: "400",
                    width: "400",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.gif&ct=g"
                },
                downsized_small: {
                    height: "160",
                    width: "160",
                    mp4_size: "160392",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized-small.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized-small.mp4&ct=g"
                },
                downsized_still: {
                    height: "320",
                    width: "320",
                    size: "36588",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-downsized_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-downsized_s.gif&ct=g"
                },
                fixed_height: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200.webp&ct=g"
                },
                fixed_height_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_d.webp&ct=g"
                },
                fixed_height_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.gif&ct=g",
                    mp4_size: "107826",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100.webp&ct=g"
                },
                fixed_height_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100_s.gif&ct=g"
                },
                fixed_height_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200_s.gif&ct=g"
                },
                fixed_width: {
                    height: "200",
                    width: "200",
                    size: "750237",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.gif&ct=g",
                    mp4_size: "371449",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.mp4&ct=g",
                    webp_size: "348090",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w.webp&ct=g"
                },
                fixed_width_downsampled: {
                    height: "200",
                    width: "200",
                    size: "144797",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.gif&ct=g",
                    webp_size: "100044",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_d.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_d.webp&ct=g"
                },
                fixed_width_small: {
                    height: "100",
                    width: "100",
                    size: "239123",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.gif&ct=g",
                    mp4_size: "48831",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.mp4&ct=g",
                    webp_size: "106468",
                    webp: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w.webp&ct=g"
                },
                fixed_width_small_still: {
                    height: "100",
                    width: "100",
                    size: "6640",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/100w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=100w_s.gif&ct=g"
                },
                fixed_width_still: {
                    height: "200",
                    width: "200",
                    size: "18455",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/200w_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=200w_s.gif&ct=g"
                },
                looping: {
                    mp4_size: "12480632",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-loop.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-loop.mp4&ct=g"
                },
                original_still: {
                    height: "400",
                    width: "400",
                    size: "51850",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy_s.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy_s.gif&ct=g"
                },
                original_mp4: {
                    height: "480",
                    width: "480",
                    mp4_size: "1663710",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy.mp4&ct=g"
                },
                preview: {
                    height: "150",
                    width: "150",
                    mp4_size: "49498",
                    mp4: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.mp4?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.mp4&ct=g"
                },
                preview_gif: {
                    height: "69",
                    width: "69",
                    size: "47356",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.gif?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.gif&ct=g"
                },
                preview_webp: {
                    height: "82",
                    width: "82",
                    size: "34030",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/giphy-preview.webp?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=giphy-preview.webp&ct=g"
                },
                '480w_still': {
                    height: "480",
                    width: "480",
                    size: "2121423",
                    url: "https://media2.giphy.com/media/LGBKlgMCKQbkDKcG4t/480w_s.jpg?cid=a68094e5gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy&rid=480w_s.jpg&ct=g"
                }
            },
            user: {
                avatar_url: "https://media4.giphy.com/avatars/dotdave/UWEU18gEPNwb.gif",
                banner_image: "",
                banner_url: "",
                profile_url: "https://giphy.com/channel/dotdave/",
                username: "dotdave",
                display_name: "3D Gif Artist",
                description: "In the first week of April 2021 I had the best performer GIF across all digital artists on Tenor. Not eligible for an Artists channel here :)",
                instagram_url: "",
                website_url: "https://www.3danimatedgifs.com/",
                is_verified: false
            },
            analytics_response_payload: "e=Z2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg",
            analytics: {
                onload: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SEEN"
                },
                onclick: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=CLICK"
                },
                onsent: {
                    url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxHQktsZ01DS1Fia0RLY0c0dCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTY4MDk0ZTVndW5yOW13N2Z5eGF3eThiNHo2ZXdlcW10NTFzMWdud3R6NTV5OHl5JmN0PWdpZg&action_type=SENT"
                }
            }
        }
    ],
    pagination: {
        total_count: 9693,
        count: 2,
        offset: 0
    },
    meta: {
        status: 200,
        msg: "OK",
        response_id: "gunr9mw7fyxawy8b4z6eweqmt51s1gnwtz55y8yy"
    }
});

export default mock;