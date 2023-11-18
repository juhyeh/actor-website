import React from "react";

const Resume = () => {
  return (
    <div className="max-w-screen-md flex flex-col justify-center items-center">
      <heading className="flex justify-start w-full">
        <h1 className="page_heading_mobile">Resume</h1>
      </heading>
      <a
        className="bg-black text-sm text-white py-4 px-7 mt-4"
        href="/luis-meraz-actor-resume.pdf"
        download
      >
        DOWNLOAD ACTOR RESUME
      </a>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-400/50 w-full" />
      <div className="resume_section">
        <div className="resume_section_title">THEATER</div>
        <div className="resume_body">
          <p>ANON(YMOUS), Lead/Anon, City Heights Performance Annex</p> <br />
          <p>INSIDE JOKE, Supporting, National Comedy Theater</p>
          <br />
          <p>SPREAD, Supporing, Finest City Improv</p>
        </div>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-400/50 w-full" />
      <div className="resume_section">
        <div className="resume_section_title">TRAINING</div>
        <div className="resume_body">
          <p>Scene Study: Robert Wald (Robert Wald Actor&apos;s Studio)</p>
          <br />
          <p>Hybrid Meisner: Irene Muzzy (LA Acting Studio)</p>
          <br />
          <p>Audition: Brooke Skyler (LA Acting Studio)</p>
          <br />
          <p>
            Improv: Gary Kramer (National Comedy Theater), Amy Lisewski (Finest
            City Improv)
          </p>
        </div>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-400/50 w-full" />
      <div className="resume_section">
        <div className="resume_section_title">HOSTING</div>
        <div className="resume_body">
          <p>Student Night Host, Finest City Improv, Skyler Lee</p>
        </div>
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-400/50 w-full" />
      <div className="resume_section">
        <div className="resume_section_title">SKILLS</div>
        <div className="resume_body">
          <p class="leading-6">
            Climbing, Cycling, Driving, Free diving, Hiking, Improvisation,
            Kickboxing, Sailing, Scuba, Snorkeling, Snowboarding, Spanish,
            Surfing, Swimming, Wind Surfing, Yoga
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
