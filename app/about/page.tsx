import Image from "next/image";
export default () => {
  const team = [
    {
      avatar: "/adityadonkada.png",
      name: "Aditya Donkada",
      title: "CTO",

      linkedin: "https://www.linkedin.com/in/bhim-prasad-aditya-donkada-b51a11290/",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "\Ayaan Headshot.png",
      name: "Ayaan Sidky",
      title: "COO",

      linkedin: "https://www.linkedin.com/in/ayaan-sidky-15508927b/",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "/Devom Headshot.jpeg",
      name: "Devom Brahmbhatt",
      title: "Head of Software",

      linkedin: "https://www.linkedin.com/in/devom-brahmbhatt-223672295/",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-blackcolor text-3xl font-semibold sm:text-2xl">
            ImpactCode is a dynamic 501(c)(3) non-profit organization with a clear-cut mission: to provide the younger generation with essential coding skills and valuable opportunities while simultaneously educating them about the incredible world of artificial intelligence. We believe that equipping today's youth with these fundamental skills is key to preparing them for the ever-evolving tech-centric landscape of the future.
          </h2>
          <h3 className="text-blackcolor text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-blackcolor font-semibold sm:text-xl">
                    {item.name}
                  </h4>
                  <p className="text-blackcolor text-xl">{item.title}</p>

                  <div className="mt-4 flex justify-center gap-4 text-blackcolor">
                    <a href={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-blackcolor"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-blackcolor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
