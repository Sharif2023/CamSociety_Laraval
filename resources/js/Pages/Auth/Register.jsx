import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const roles = {
        Client : 0,
        Photographer : 1,
    };
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Join Society" />

            <div className="min-h-[90vh] flex items-center justify-center px-4 py-32 relative overflow-hidden">
                {/* Background Blobs for Register */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3300] rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px]"></div>
                </div>

                <div className="w-full max-w-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 sm:p-12 shadow-2xl">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl sm:text-6xl font-black font-['Playfair_Display'] text-white">
                                Founding <span className="italic text-[#FF3300]">Member.</span>
                            </h1>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold mt-4">Join the Elite Photography Network</p>
                        </div>

                        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <InputLabel htmlFor="name" value="Full Name" className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-4" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="block w-full px-6 py-4 rounded-2xl"
                                    autoComplete="name"
                                    isFocused={true}
                                    placeholder="Enter full name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-1 ml-4" />
                            </div>

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
                                    placeholder="name@example.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-1 ml-4" />
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <InputLabel htmlFor="password" value="Password" className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-4" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="block w-full px-6 py-4 rounded-2xl"
                                    autoComplete="new-password"
                                    placeholder="Create password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-1 ml-4" />
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-4" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="block w-full px-6 py-4 rounded-2xl"
                                    autoComplete="new-password"
                                    placeholder="Confirm password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-1 ml-4" />
                            </div>

                            {/* Role Selection */}
                            <div className="space-y-2 md:col-span-2">
                                <InputLabel htmlFor="role" value="Account Type" className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-4" />
                                <select
                                    id="role"
                                    name="role"
                                    value={data.role}
                                    className="block w-full px-6 py-4 rounded-2xl bg-white/5 border-white/10 text-white focus:border-[#FF3300] focus:ring-[#FF3300] transition-all appearance-none cursor-pointer font-medium tracking-wide"
                                    onChange={(e) => setData('role', e.target.value)}
                                    required
                                >
                                    <option value="" disabled hidden className="bg-black">Select account type</option>
                                    <option value={roles.Client} className="bg-black">Elite Client / Collector</option>
                                    <option value={roles.Photographer} className="bg-black">Certified Visionary / Photographer</option>
                                </select>
                                <InputError message={errors.role} className="mt-1 ml-4" />
                            </div>

                            <div className="md:col-span-2 pt-6 flex flex-col items-center gap-8">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full relative group py-5 bg-[#FF3300] text-white text-sm font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-[0_15px_40px_rgba(255,51,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,51,0,0.5)] transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 overflow-hidden"
                                >
                                    <span className="relative z-10">{processing ? 'Creating Account...' : 'Create Account'}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>

                                <Link
                                    href={route('login')}
                                    className="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.3em] transition-colors"
                                >
                                    Already registered? <span className="text-[#FF3300] ml-2">Sign In</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}