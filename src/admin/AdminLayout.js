import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div>
            <nav>
                <Link to="/admin/add-product">Add Product</Link>
                <Link to="/admin/view-transactions">View Transactions</Link>
                <Link to="/admin/update-product">Update proudct</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default AdminLayout;
