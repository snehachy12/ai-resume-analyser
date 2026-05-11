import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/templates', 'routes/templates.tsx'),
    route('/editor', 'routes/editor.tsx'),
    route('/analysis/:id', 'routes/analysis.$id.tsx'),
] satisfies RouteConfig;
