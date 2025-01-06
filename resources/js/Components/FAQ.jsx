export default function FAQ() {
    return (
        <>
            {/* <!-- FAQ --> */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-8 space-y-4">
                        <details className="border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">
                                What is CamSociety?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                CamSociety provides a platform for photographers to showcase
                                their work, connect with others, and grow their careers.
                            </p>
                        </details>
                        <details className="border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">
                                How do I join the community?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                Click the 'Join Now' button on our homepage and fill out the
                                registration form to get started.
                            </p>
                        </details>
                        <details className="border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">
                                Can I sell my photos?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                Yes, our marketplace allows photographers to sell their work and
                                earn commissions.
                            </p>
                        </details>
                        <details className="border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">
                                Are there any workshops?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                We regularly host workshops and networking events for
                                photographers of all skill levels.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}