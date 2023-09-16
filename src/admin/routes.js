import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Adding from './Add-pro';
import Update from './update';
function AdminRoutes(children) {
    return (
        <AdminLayout>
            <Routes>
                <Route path="/" element={<AdminLayout />} /> //
                <Route path="add-product" element={<Adding />} />
                <Route path="update-product" element={<Update />} />
            </Routes>
        </AdminLayout>
    );
}

export default AdminRoutes;