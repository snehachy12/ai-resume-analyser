import { useSearchParams, useNavigate } from "react-router";
import Navbar from "~/components/Navbar";
import ProfessionalCard from "~/components/ProfessionalCard";
import { useState } from "react";

export const meta = () => ([
  { title: "Resume Editor | Resumind" },
  { name: "description", content: "Create and edit your professional resume" },
]);

interface ResumeForm {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
  certifications: string;
}

export default function Editor() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const template = searchParams.get("template") || "modern-minimal";
  
  const [formData, setFormData] = useState<ResumeForm>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    certifications: "",
  });

  const [previewMode, setPreviewMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    // Save logic here
    alert("Resume saved! You can now download or upload to analyze.");
    navigate("/");
  };

  const editorSections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Full Name", name: "fullName", type: "text", placeholder: "John Doe" },
        { label: "Email", name: "email", type: "email", placeholder: "john@example.com" },
        { label: "Phone", name: "phone", type: "tel", placeholder: "+1 (555) 123-4567" },
        { label: "Location", name: "location", type: "text", placeholder: "San Francisco, CA" },
      ],
    },
    {
      title: "Professional Summary",
      fields: [
        { label: "Summary", name: "summary", type: "textarea", placeholder: "Brief overview of your professional background and goals..." },
      ],
    },
    {
      title: "Experience",
      fields: [
        { label: "Work Experience", name: "experience", type: "textarea", placeholder: "Job Title | Company | Duration | Key Achievements..." },
      ],
    },
    {
      title: "Education",
      fields: [
        { label: "Education", name: "education", type: "textarea", placeholder: "Degree | School | Graduation Date | GPA..." },
      ],
    },
    {
      title: "Skills & Certifications",
      fields: [
        { label: "Skills", name: "skills", type: "textarea", placeholder: "List skills separated by commas..." },
        { label: "Certifications", name: "certifications", type: "textarea", placeholder: "List certifications..." },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-void py-10">
      <Navbar />

      {/* Background orbs */}
      <div className="orb orb-acid w-96 h-96 -top-20 -left-20 opacity-10"></div>
      <div className="orb orb-plasma w-72 h-72 -bottom-20 right-10 opacity-10"></div>

      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume Editor</h1>
            <p className="text-text-secondary">
              Template: <span className="text-acid font-semibold capitalize">{template.replace("-", " ")}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="px-6 py-3 rounded-lg border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold"
            >
              {previewMode ? "Edit" : "Preview"}
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 rounded-lg bg-acid text-void hover:bg-lime transition-all duration-200 font-bold"
            >
              Save Resume
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Form */}
          {!previewMode && (
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {editorSections.map((section, idx) => (
                  <ProfessionalCard key={idx} className="p-8" glow="cyan">
                    <h2 className="text-2xl font-bold text-cyan mb-6">{section.title}</h2>
                    <div className="space-y-6">
                      {section.fields.map((field) => (
                        <div key={field.name}>
                          <label className="block text-text-secondary font-medium mb-2">
                            {field.label}
                          </label>
                          {field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              placeholder={field.placeholder}
                              value={formData[field.name as keyof ResumeForm]}
                              onChange={handleChange}
                              className="w-full h-24 px-4 py-3 rounded-lg bg-graphite border border-smoke text-text-primary placeholder:text-text-muted focus:border-cyan focus:bg-carbon transition-all"
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              value={formData[field.name as keyof ResumeForm]}
                              onChange={handleChange}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </ProfessionalCard>
                ))}
              </div>
            </div>
          )}

          {/* Preview */}
          {previewMode || (
            <div className="lg:col-span-1">
              <ProfessionalCard className="p-8 sticky top-24 bg-carbon/80">
                <h3 className="text-xl font-bold text-acid mb-4">Preview</h3>
                <div className="space-y-4 text-sm">
                  {formData.fullName && (
                    <div>
                      <p className="text-acid font-bold">{formData.fullName}</p>
                      <p className="text-text-secondary">{formData.location}</p>
                    </div>
                  )}
                  {formData.email && (
                    <p className="text-text-secondary text-xs">{formData.email}</p>
                  )}
                  {formData.summary && (
                    <div>
                      <p className="text-text-secondary text-xs line-clamp-3">
                        {formData.summary}
                      </p>
                    </div>
                  )}
                  <div className="pt-4 border-t border-smoke">
                    <p className="text-text-muted text-xs">
                      Last saved: Just now
                    </p>
                  </div>
                </div>
              </ProfessionalCard>
            </div>
          )}
        </div>
      </section>

      <div className="noise"></div>
    </main>
  );
}
