import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Welcome Back
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    Sign in to your account
                </p>
            </div>

            {status && (
                <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                {/* Email Field */}
                <div>
                    <InputLabel htmlFor="email" value="Email" className="text-gray-700 font-medium text-sm" />
                    <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full pl-10 py-2.5 text-sm"
                            autoComplete="username"
                            isFocused={true}
                            placeholder="you@example.com"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-1" />
                </div>

                {/* Password Field */}
                <div>
                    <InputLabel htmlFor="password" value="Password" className="text-gray-700 font-medium text-sm" />
                    <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full pl-10 py-2.5 text-sm"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password} className="mt-1" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-gray-600">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-primary hover:text-dark font-medium transition-colors"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex justify-center items-center gap-2 py-2.5 px-4 bg-primary text-white font-semibold rounded-lg shadow hover:bg-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
                >
                    {processing ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing in...
                        </>
                    ) : (
                        'Sign In'
                    )}
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link
                        href={route('register')}
                        className="text-primary font-semibold hover:text-dark transition-colors"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}