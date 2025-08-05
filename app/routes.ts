import { type RouteConfig, index, layout,route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/index.tsx"),
        route("bio","routes/bio.tsx"),
        route("music","routes/music.tsx"),
        route("games","routes/games.tsx"),
        route("film","routes/film.tsx"),
        route("contact","routes/contact.tsx"),
    ])
] satisfies RouteConfig;
