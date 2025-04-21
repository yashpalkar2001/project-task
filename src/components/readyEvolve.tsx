"use client";

export default function ReadyToEvolve() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-[10%] px-4 sm:px-8 bg-white overflow-hidden">
      {/* Background infinity logo */}
      <div
        className="relative bg-center bg-no-repeat bg-auto "
        style={{
          backgroundImage: "url('/rectangle.png')",
        }}
      >
        {/* Main Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Ready to Evolve <span className="text-black">?</span>
          </h2>

          <p className="text-3xl  font-bold mb-4 px-5">
            Manifest Your Best Life
            <span className="font-normal text-black pl-2">
              with best Counsellors, Healers, Therapist, Coaches, Educators,
              Services, Products, Retreats, Festivals, Courses, Corporate
              wellness programs, Community.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
