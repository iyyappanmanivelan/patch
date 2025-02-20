
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";

function View() {
  const paramscontent = useParams();
  const id = paramscontent.id;

  const router = useNavigate();

  return (
    <>
      <Header />

      <section>
        <div className="container-fluid">
          <div className="view-pages position-relative">
            <div className="view-pic">
              {id == "1" ? (
                <img src="\assets\gp.jpg" className="img-fluid" />
              ) : id == "2" ? (
                <img src="\assets\vde.jpg" className="img-fluid" />
              ) : id == "3" ? (
                <img src="\assets\shoot.jpg" className="img-fluid" />
              ) : id == "4" ? (
                <img src="\assets\dm.webp" className="img-fluid" />
              ) : id == "5" ? (
                <img src="\assets\webdp.jpg" className="img-fluid" />
              ) : id == "6" ? (
                <img src="\assets\contentc.jpeg" className="img-fluid" />
              ) : id == "7" ? (
                <img src="\assets\bordcasting.jpg" className="img-fluid" />
              ) : id == "8" ? (
                <img src="\assets\socialmd.jpg" className="img-fluid" />
              ) : id == "9" ? (
                <img
                  src="\assets\business analysis.jpg"
                  className="img-fluid"
                />
              ) : (
                <img src="\assets\photogp.jpeg" className="img-fluid" />
              )}
            </div>
            <div className="view-cont position-absolute">
              <h2>
                {id == "1"
                  ? "Graphic Design"
                  : id == "2"
                  ? "Video Editing"
                  : id == "3"
                  ? "Video Shooting"
                  :id == "4"
                  ? "Digital Marketing"
                  :id == "5"
                  ? "Web Development"
                  :id == "6"
                  ? "Content Creation"
                  :id == "7"
                  ? "PodCasting"
                  :id == "8"
                  ? "Social media Handling"
                  :id == "9"
                  ? "Business Analysis"
                  : "Photography"}
              </h2>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="service-board text-center text-light py-4 ">
            <h4>Why Choose Us ?</h4>
          </div>
          {id == "1" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Brand Identity Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      Creating a strong brand identity is essential for standing
                      out in today’s competitive market. We specialize in
                      crafting memorable logos, color palettes,typography, and
                      brand guidelines that convey the personality of your
                      business and leave a lasting impression on your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Print Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      From brochures and business cards to posters and flyers,
                      our print design services ensure your marketing materials
                      make an impact. We focus on designs that not only look
                      great but also communicate your message effectively,
                      helping you connect with your audience in the real world.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Web and UI/UX Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      In the digital age, a well-designed website is key to
                      business success. We create intuitive, user-friendly
                      websites and web applications that are both visually
                      appealing and functional, ensuring a seamless experience
                      for your visitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Social Media Graphics</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      Social media is an essential marketing tool, and having
                      eye-catching graphics can make all the difference. Our
                      social media design services include custom graphics,
                      banners, and templates that align with your brand and
                      capture the attention of your target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Packaging Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      Packaging is an extension of your brand, and our creative
                      packaging design services help ensure your products stand
                      out on the shelf. We focus on designs that not only look
                      good but also reflect your brand’s values and appeal to
                      your customer base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "2" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Trendy Editing Techniques</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We incorporate the latest video editing trends, from fast-paced cuts and seamless 
                    transitions to dynamic visual effects, to ensure your videos stand out in a crowded digital space.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Platform-Specific Content</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We understand the unique styles for different platforms, such as TikTok, Instagram Reels, YouTube Shorts, 
                    and more. Our edits are tailored to optimize your content for maximum engagement and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Color Grading & Aesthetics</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    With attention to color tones and visual styles, we enhance your videos to give them that eye-catching, cinematic look that’s trending right now.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Attention-Grabbing Music</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We pair your visuals with the latest popular tracks and sound effects 
                    that resonate with today's audience, creating an immersive and impactful experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Creative Transitions & Effects</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    From smooth transitions to bold visual effects, our editing style 
                    brings an exciting dynamic to your videos, making them more entertaining and shareable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "3" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Expert Videography</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We specialize in creating visually stunning videos that capture the essence of your brand.
                     Whether it's a product launch, behind-the-scenes content, or promotional videos, our team is equipped to deliver top-tier videos.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Tailored for Social Media</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Every platform has its own style and audience. We understand the best practices for video content on platforms like Instagram, 
                    TikTok, Facebook, LinkedIn, and YouTube, ensuring your video resonates with viewers and boosts engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Creative Concepts</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    From scripting to editing, we work with you to develop creative concepts that align with your brand identity and marketing goals.
                     We’ll craft the perfect narrative to capture your audience's attention and drive results.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Concept & Planning</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    After understanding your objectives, we craft a video concept that aligns with your brand message and social media strategy.
                    Once your video is complete, we deliver it in the perfect format for your chosen social media platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Product Demonstration Videos</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Highlight your products or services in a way that’s engaging and easy to understand and Create short-form ads optimized for social media platforms to drive traffic, increase brand awareness, and boost sales.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Editing & Final Touches</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We fine-tune your video with professional editing, adding animations, music, and text to make your video stand out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "4" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Search Engine Optimization</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Improve your website’s visibility on search engines, driving organic traffic and ranking higher for relevant keywords. 
                    Our SEO experts implement both on-page and off-page strategies that align with the latest SEO best practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Social Media Marketing</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Build a loyal community of followers and engage with your audience across social media platforms. 
                    We create and execute social media strategies that boost brand awareness, drive traffic, and foster customer loyalty.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Content Marketing</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                      Engage and inform your audience with high-quality, relevant content. From blog posts and articles to 
                      videos and infographics, we develop content that resonates with your audience and supports your brand goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Brand Reputation Management</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Ensure your brand’s online presence reflects your values and reputation. We manage and improve your brand’s image by addressing customer 
                    feedback, monitoring reviews, and enhancing your online reputation.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Conversion Rate Optimization</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Increase the effectiveness of your website by optimizing user experience and conversion funnels.
                     Our team uses data-driven insights to enhance your site’s design and functionality, turning visitors into customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Email Marketing</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Reach and nurture your audience with effective email campaigns. 
                    We design targeted email marketing strategies that boost open rates, drive conversions, and keep your brand top-of-mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "5" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Landing Page Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Focus on specific campaigns or products with high-converting landing pages designed to capture leads and drive sales.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Custom Website Design:</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We create visually engaging websites that are tailored to your brand’s
                     unique voice and audience, ensuring you stand out from the competition.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Responsive & Mobile-Friendly</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    With mobile browsing becoming more prevalent, we design websites that work seamlessly 
                    across all devices — from desktops to smartphones and tablets.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Website Maintenance & Support</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We offer ongoing website maintenance and support to ensure your site runs smoothly, stays up to date, and remains secure.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Planning & Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Our team will create wireframes and design prototypes for your approval. Once you’re happy with the direction, we move forward with full design and development.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>User-Centered Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We focus on creating intuitive, easy-to-navigate websites that provide a smooth user experience.
                     The more user-friendly your site, the higher the chances of converting visitors into loyal customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "6" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Brand Promotion Content</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Effective brand promotion requires consistent and compelling messaging. We help you tell your brand story through
                    creative content that resonates with your target audience. From taglines to promotional 
                    campaigns, we craft messages that build awareness and loyalty for your brand.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Social Media Copywriting</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We create engaging social media posts that drive interaction and increase your reach across platforms like Instagram, Facebook, LinkedIn, and Twitter. Whether it's for organic posts or paid promotions, 
                    our content is designed to capture attention, encourage engagement, and support your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Website Content Writing</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Your website is your digital storefront, and the words you use can make all the difference. We provide high-quality, persuasive website copy that enhances user experience, strengthens your brand image, and drives conversions.  we ensure your website speaks directly to your target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Content for Short Films</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    If you need a script or storyline for a short film or video, we offer content writing that brings your story 
                    to life, whether it's for promotional videos, educational content, or entertainment.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>E-books & Whitepapers</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Establish your brand as an authority in your industry by providing in-depth, informative e-books and whitepapers. 
                    We help you create long-form content that educates and converts your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Social Media Content</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Social media platforms are all about short, snappy, and engaging content. Our team creates creative social media posts, captions, and campaigns that
                     attract likes, shares, and comments, increasing your online visibility and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          
          id == "7" ? (
            <div className="row">
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Podcast Concept Development</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We assist with the brainstorming and development of your podcast concept. Whether you're starting from scratch or looking to refine an existing idea, 
                    we help create a podcast that resonates with your target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Podcast Recording</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We offer professional recording services, including studio time or remote recording setups.
                     Whether you're recording solo or with guests, we ensure your audio quality is flawless and ready for editing.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Podcast Show Notes & Transcriptions</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We create detailed show notes and provide transcription services to enhance your podcast’s SEO, making it easier for listeners to find your content. Show notes also provide a useful summary of each episode for your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>PPodcast Editing</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    Editing is crucial to ensure a polished, engaging podcast. Our expert editors clean up your audio, remove background noise, tighten up pacing, and add effects, music, or sound design to create a seamless listening experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Podcast Branding & Design</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    We help design your podcast’s cover art and create consistent branding to make your show visually appealing and memorable. We ensure your podcast’s look and feel align with your message and audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div
                  className="dc text-center"
                  onClick={() => {
                    router("/contacts");
                  }}
                >
                  <div className="dc-title">
                    <h3>Podcast Marketing & Promotion</h3>
                  </div>
                  <div className="dc-info">
                    <p>
                    After understanding your requirements, we work with you to develop a detailed plan. This includes scheduling, technical setup, crew assignments, and platform integration.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : id == "8" ? (
            <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Platform Management</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We handle the day-to-day management of your social media accounts, ensuring timely posts, active engagement, and consistent messaging across platforms
                   like Instagram, Facebook, Twitter, LinkedIn, TikTok, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Social Media Strategy Development</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We start by analyzing your business, goals, and audience to create a customized social media strategy that
                   aligns with your objectives. Whether it’s increasing brand awareness, driving traffic to your website, or boosting sales, we tailor our approach to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Content Creation & Posting</h3>
                </div>
                <div className="dc-info">
                  <p>
                  Our creative team develops compelling content for your social media platforms. From graphics and videos to blog posts and stories, we create diverse content that engages and entertains your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Audience Engagement</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We interact with your followers, respond to comments and messages, and initiate discussions to build a loyal community. We also handle customer inquiries and concerns in a professional and timely manner.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Monthly Analytics & Reporting</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We provide detailed monthly reports that include key metrics like engagement, growth, reach, and click-through rates. Based on these insights, we continuously refine your social media strategy.
          
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Social Media Ads Management</h3>
                </div>
                <div className="dc-info">
                  <p>
                  If you're looking to run paid social media campaigns, we create, optimize, and manage ads across platforms like Facebook, Instagram, LinkedIn, and TikTok to ensure maximum reach, engagement, and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          ) :
           id == "9" ? (
            <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Business Process Analysis</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We analyze your current business processes to identify inefficiencies, bottlenecks, and areas of improvement. We provide recommendations to streamline operations, reduce costs, and improve productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Requirements Gathering</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We work closely with stakeholders to gather and document business requirements for new projects, software implementations, or process improvements, ensuring that all needs are met efficiently and accurately.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Competitive Analysis</h3>
                </div>
                <div className="dc-info">
                  <p>
                  Our analysts conduct thorough market research to identify emerging trends, assess your competitors, and uncover new opportunities for growth. This helps you stay ahead of the competition and capitalize on market changes.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Strategy Development</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We provide business intelligence solutions that turn complex data into clear, actionable insights. Our team helps you develop data-driven strategies for improving business operations and achieving your long-term goals.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Project Management Support</h3>
                </div>
                <div className="dc-info">
                  <p>
                  Our analysts support your project management efforts by ensuring projects are aligned with business objectives, on track, and within scope. We also assist with risk management, timelines, and resource allocation.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div
                className="dc text-center"
                onClick={() => {
                  router("/contacts");
                }}
              >
                <div className="dc-title">
                  <h3>Customer Experience Analysis</h3>
                </div>
                <div className="dc-info">
                  <p>
                  We evaluate customer feedback, journey mapping, and satisfaction data to identify pain points in the customer experience. Our recommendations help you enhance engagement, retention, and loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          ) :  
          <div className="row">
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Social Media & Marketing Images</h3>
              </div>
              <div className="dc-info">
                <p>
                We provide a collection of social media-ready portraits that are optimized for sharing across platforms like LinkedIn, Instagram, Facebook, and your business’s website. These images are perfect for building a cohesive online presence.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Product & Service-Related Portraits</h3>
              </div>
              <div className="dc-info">
                <p>
                Highlight your products or services with portraits that integrate them into the overall business narrative. These photos create a deeper connection between your offerings and your clients.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Corporate Branding Portraits</h3>
              </div>
              <div className="dc-info">
                <p>
                If you're building or enhancing your brand identity, we offer corporate branding portraits that reflect your business’s values, vision, and personality. These portraits are ideal for company websites, social media pages, and promotional materials.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Professional Headshots</h3>
              </div>
              <div className="dc-info">
                <p>
                A strong headshot is essential for making a positive impression. Whether it's for your website, LinkedIn profile, or marketing materials, we create professional headshots that convey confidence, approachability, and professionalism.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Team & Group Portraits</h3>
              </div>
              <div className="dc-info">
                <p>
                Show the faces behind your business with a high-quality team portrait. Whether you're a small business or a large corporation, we help you showcase your team in a way that communicates collaboration, trust, and expertise.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div
              className="dc text-center"
              onClick={() => {
                router("/contacts");
              }}
            >
              <div className="dc-title">
                <h3>Business Events & Conferences</h3>
              </div>
              <div className="dc-info">
                <p>
                Capture the essence of your business events, conferences, and networking sessions with candid or posed portraits that showcase your brand's success and engagement with your industry.

                </p>
              </div>
            </div>
          </div>
        </div>}
        </div>
      </section>
    </>
  );
}

export default View;
