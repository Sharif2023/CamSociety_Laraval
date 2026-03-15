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
            <Head title="Access Society" />

            <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
                {/* Background Blobs for Login */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3300] rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px]"></div>
                </div>

                <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 sm:p-12 shadow-2xl">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-black font-['Playfair_Display'] text-white">
                                Welcome <span className="italic text-[#FF3300]">Back</span>
                            </h1>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold mt-3">Access Your Professional Workspace</p>
                        </div>

                        {status && (
                            <div className="mb-6 p-4 rounded-2xl bg-[#FF3300]/10 border border-[#FF3300]/20 text-xs font-bold text-[#FF3300] text-center uppercase tracking-widest">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <InputLabel htmlFor="email" value="Email Address" className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-4" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="block w-full px-6 py-4 rounded-2xl"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="name@example.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-1 ml-4" />
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-4">
                                    <InputLabel htmlFor="password" value="Password" className="text-gray-500 text-[10px] font-black uppercase tracking-widest" />
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-[10px] text-gray-500 hover:text-[#FF3300] font-black uppercase tracking-widest transition-colors"
                                        >
                                            Forgot Password?
                                        </Link>
                                    )}
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="block w-full px-6 py-4 rounded-2xl"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-1 ml-4" />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center ml-4">
                                <label className="flex items-center cursor-pointer group">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="bg-white/5 border-white/10 text-[#FF3300] rounded focus:ring-0 focus:ring-offset-0"
                                    />
                                    <span className="ms-2 text-[10px] font-black text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-widest">Remember Me</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full relative group py-4 bg-[#FF3300] text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_rgba(255,51,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,51,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 mt-4 overflow-hidden"
                            >
                                <span className="relative z-10">{processing ? 'Signing In...' : 'Sign In'}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] pt-4">
                                Not a member?{' '}
                                <Link
                                    href={route('register')}
                                    className="text-white hover:text-[#FF3300] transition-colors ml-2"
                                >
                                    Join The Society
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}