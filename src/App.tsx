import { useState } from "react";
import {
    Package,
    Shield,
    BarChart3,
    Zap,
    CheckCircle,
    Globe,
    Smartphone,
    ArrowRight,
    Menu,
    X,
} from "lucide-react";
import demoImage from "./assets/demo.png";

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: Package,
            title: "Complete Asset Tracking",
            description:
                "Track all your assets in real-time with detailed information, location data, and comprehensive history.",
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description:
                "Enterprise-grade security ensures your asset data is protected with encryption and access controls.",
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description:
                "Gain insights with powerful reporting and analytics to make data-driven decisions about your assets.",
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description:
                "Built for performance with instant updates and seamless synchronization across all devices.",
        },
    ];

    const benefits = [
        "Real-time asset tracking and monitoring",
        "Customizable asset categories and fields",
        "QR code and barcode scanning support",
        "Automated maintenance schedules",
        "Multi-user collaboration tools",
        "Comprehensive audit trails",
        "Mobile-responsive interface",
        "Export and reporting capabilities",
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <Package
                                    className="w-6 h-6 text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">
                                trackz
                                <span className="text-orange-600">.cloud</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                            >
                                Features
                            </a>
                            <a
                                href="#benefits"
                                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                            >
                                Benefits
                            </a>
                            <a
                                href="#download"
                                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                            >
                                Download
                            </a>
                            <a href="https://app.trackz.cloud" target="_blank">
                                <button className="flex items-center bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-all font-semibold shadow-md hover:shadow-lg">
                                    <Smartphone className="mr-2 w-5 h-5" />
                                    Launch Web App
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-700"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-3">
                            <a
                                href="#features"
                                className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                            >
                                Features
                            </a>
                            <a
                                href="#benefits"
                                className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                            >
                                Benefits
                            </a>
                            <a
                                href="#download"
                                className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                            >
                                Download
                            </a>
                            <button className="w-full bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-all font-semibold">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                <span>Web & PWA Support</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Professional Asset Management
                                <span className="block text-gradient mt-2">
                                    Made Simple
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Track, manage, and monitor all your assets
                                effortlessly. Trackz.cloud provides powerful
                                tools for businesses to maintain complete
                                visibility over their asset inventory.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8">
                                <a
                                    href="https://app.trackz.cloud"
                                    target="_blank"
                                >
                                    <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg flex items-center group">
                                        <Globe className="mr-2 w-5 h-5" />
                                        Launch Web App
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                                <a
                                    href="https://app.trackz.cloud"
                                    target="_blank"
                                >
                                    <button className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-all font-semibold text-lg border-2 border-white/20 flex items-center">
                                        <Smartphone className="mr-2 w-5 h-5" />
                                        Install PWA
                                    </button>
                                </a>
                            </div>
                            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <Globe className="w-5 h-5 text-orange-600" />
                                    <span>Web Browser</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Smartphone className="w-5 h-5 text-orange-600" />
                                    <span>PWA Ready</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                                <div className="bg-white rounded-xl p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                <Package className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    Asset Overview
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    1,247 items tracked
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">
                                                Active
                                            </p>
                                            <p className="text-2xl font-bold text-green-600">
                                                892
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">
                                                In Transit
                                            </p>
                                            <p className="text-2xl font-bold text-blue-600">
                                                124
                                            </p>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">
                                                Maintenance
                                            </p>
                                            <p className="text-2xl font-bold text-orange-600">
                                                67
                                            </p>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600">
                                                Retired
                                            </p>
                                            <p className="text-2xl font-bold text-purple-600">
                                                164
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Powerful Features for Asset Management
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to efficiently track and manage
                            your assets in one comprehensive platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                id="benefits"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Trackz.cloud?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our platform is designed to streamline your
                                asset management workflow with intuitive
                                features and powerful capabilities.
                            </p>
                            <div className="grid gap-4">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <img src={demoImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download/CTA Section */}
            <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4">
                                Ready to Transform Your Asset Management?
                            </h2>
                            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
                                Access Trackz.cloud from any web browser or
                                install as a PWA for the best experience
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <a
                                    href="https://app.trackz.cloud"
                                    target="_blank"
                                >
                                    <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg flex items-center group">
                                        <Globe className="mr-2 w-5 h-5" />
                                        Launch Web App
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                                <a
                                    href="https://app.trackz.cloud"
                                    target="_blank"
                                >
                                    <button className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-all font-semibold text-lg border-2 border-white/20 flex items-center">
                                        <Smartphone className="mr-2 w-5 h-5" />
                                        Install PWA
                                    </button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-orange-50">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>No downloads required</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Works offline with PWA</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Cross-platform compatible</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                    <Package
                                        className="w-6 h-6 text-white"
                                        strokeWidth={2.5}
                                    />
                                </div>
                                <span className="text-xl font-bold">
                                    trackz
                                    <span className="text-orange-500">
                                        .cloud
                                    </span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Professional asset management and tracking for
                                modern businesses.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a
                                        href="#features"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#benefits"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#download"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Download
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center space-x-2">
                                    <Globe className="w-4 h-4 text-orange-500" />
                                    <span>Web Browser</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Smartphone className="w-4 h-4 text-orange-500" />
                                    <span>Progressive Web App</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2025 Trackz.cloud. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
