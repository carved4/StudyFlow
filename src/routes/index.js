import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { component: Dashboard }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }));
};
export default AppRoutes;
