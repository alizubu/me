export default function SkillsSection() {
  const skills = [
    "User interface",
    "Visual Design",
    "Photography",
    "Social Media",
    "Web Development",
    "Marketing",
    "Video Editing",
    "User Experience",
    "Motion Graphics",
  ];

  return (
    <section className="horizontalScrolling skill" data-scroll-section>
      <div className="row d-flex fluid-container pb-4">
        <div className="col-12 col-md-6" data-scroll="" data-scroll-speed="4">
          <p>
            Over the years, I have cultivated <strong>many passions</strong> and{" "}
            <strong>studied many things</strong>, and as a result I have gained
            different skills in various fields:
          </p>
        </div>
      </div>
      <div className="section-inner" data-scroll="" data-scroll-speed="0" data-scroll-direction="horizontal">
        <div data-scroll-in-section="">
          {skills.map((skill, index) => (
            <div className="item" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="row d-flex fluid-container mt-4">
        <div className="col-12 col-md-8" data-scroll="" data-scroll-speed="0">
          <p>
            This multi-potential makes life easier for me in approaching different
            types of projects and in creating productive dialogues between people
            from different fields.
          </p>
        </div>
      </div>
    </section>
  );
}
