import React from "react";

export default function Footer() {
    return (
        <footer className="bg-strong text-main py-8 mt-20">
            <div className="px-40">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-xl text-main font-bold mb-2">
                            Đà Nẵng Tourist
                        </h2>
                        <p className="text-sm text-main">
                            © {new Date().getFullYear()} Đà Nẵng Tourist. Tất cả
                            các quyền được bảo lưu.
                        </p>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-main transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-main transition-colors duration-300"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-main transition-colors duration-300"
                        >
                            Twitter
                        </a>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 text-sm flex justify-between">
                    <div className="space-y-2">
                        <a href="#" className="hover:underline">
                            Về Chúng Tôi
                        </a>
                        <a href="#" className="hover:underline">
                            Liên Hệ
                        </a>
                        <a href="#" className="hover:underline">
                            Điều Khoản Dịch Vụ
                        </a>
                    </div>

                    <div className="space-y-2">
                        <a href="#" className="hover:underline">
                            Chính Sách Bảo Mật
                        </a>
                        <a href="#" className="hover:underline">
                            Câu Hỏi Thường Gặp
                        </a>
                        <a href="#" className="hover:underline">
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
