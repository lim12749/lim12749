import { FiArrowUpRight, FiArrowUp, FiPrinter } from 'react-icons/fi'
import { projects, experiences, skillGroups, education, selfIntroduction } from './data/resume'

const sections = [['about', '자기소개'], ['projects', '프로젝트'], ['experience', '경력'], ['skills', '기술'], ['education', '교육']] as const

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <div className="page-shell" id="top">
        <div className="masthead">
          <a className="wordmark" href="#top" aria-label="임기원 이력서 처음으로">giwon<span>.</span></a>
          <span className="edition">DEVELOPER PORTFOLIO / RESUME</span>
          <button className="print-button" onClick={() => window.print()}><FiPrinter aria-hidden="true" /> 인쇄 / PDF 저장</button>
        </div>
        <main id="main">
          <header className="intro">
            <div className="intro-content">
              <p className="eyebrow">FRONTEND · FULL-STACK · UNITY</p>
              <h1>임기원<span>Im Giwon</span></h1>
              <p className="intro-headline">문제를 발견하고,<br />끝까지 완성하는 개발자.</p>
              <p className="intro-description">Unity 클라이언트에서 웹과 AI 서비스까지.<br className="desktop-break" /> 빠르게 구현하고, 실제 사용으로 검증하며 개선합니다.</p>
              <a className="intro-contact" href="mailto:lim12749@gmail.com">lim12749@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
              <div className="intro-tags"><span>프론트엔드 · 풀스택</span><span>제품 개발 · 운영 경험</span></div>
            </div>
            <div className="monogram" aria-hidden="true"><span>IG</span><small>BUILD. VERIFY. IMPROVE.</small></div>
          </header>
          <nav className="section-nav" aria-label="이력서 목차">
            <div>{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
            <span className="nav-note">경험으로 설명합니다.</span>
          </nav>
          <section className="resume-section" id="about" aria-labelledby="about-title">
            <div className="section-heading"><span className="section-number">00 / ABOUT ME</span><h2 id="about-title">자기소개</h2><p>문제를 이해하고,<br />사용할 수 있는 결과물로.</p></div>
            <div className="section-content self-introduction">
              {selfIntroduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
          <section className="resume-section" id="projects" aria-labelledby="projects-title">
            <div className="section-heading"><span className="section-number">01 / WORK</span><h2 id="projects-title">프로젝트</h2><p>직접 만든 서비스와<br />해결해 온 문제들.</p></div>
            <div className="section-content">
              {projects.map((project, index) => (
                <article className="project" key={project.id} id={project.id}>
                  <div className="project-kicker"><span>{String(index + 1).padStart(2, '0')} <span className="kicker-divider">/</span> {project.category}</span><span>{project.period}</span></div>
                  <div className="project-title-row"><h3>{project.title}</h3>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} 사이트 보기 (새 탭)`}><span>사이트 보기</span><FiArrowUpRight aria-hidden="true" /></a>}</div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-role">{project.role}</p>
                  <p className="project-summary">{project.summary}</p>
                  {project.videoId && (
                    <figure className="project-video">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                        title={`${project.title} 점검·정비 관리 솔루션 소개 영상`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                      <figcaption><span>MYVR 소개 영상</span><a href={`https://www.youtube.com/watch?v=${project.videoId}`} target="_blank" rel="noopener noreferrer">YouTube에서 보기 <FiArrowUpRight aria-hidden="true" /></a></figcaption>
                    </figure>
                  )}
                  <ul className="highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
                  {project.stack.length > 0 && <ul className="tech-list" aria-label="사용 기술">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>}
                </article>
              ))}
            </div>
          </section>
          <section className="resume-section" id="experience" aria-labelledby="experience-title">
            <div className="section-heading"><span className="section-number">02 / CAREER</span><h2 id="experience-title">경력</h2><p>개발부터 납품, 운영까지.</p></div>
            <div className="section-content">{experiences.map(job => <article className="career-item" key={job.company}>
              <p className="item-period">{job.period}</p><h3>{job.company}</h3><p className="career-role">{job.role}</p><p>{job.description}</p><ul className="highlights">{job.highlights.map(item => <li key={item}>{item}</li>)}</ul>
            </article>)}</div>
          </section>
          <section className="resume-section" id="skills" aria-labelledby="skills-title">
            <div className="section-heading"><span className="section-number">03 / TOOLKIT</span><h2 id="skills-title">기술</h2><p>프로젝트에서 사용한 도구.</p></div>
            <dl className="section-content skill-groups">{skillGroups.map(group => <div key={group.title}><dt>{group.title}</dt><dd>{group.items.join(' · ')}</dd></div>)}</dl>
          </section>
          <section className="resume-section" id="education" aria-labelledby="education-title">
            <div className="section-heading"><span className="section-number">04 / LEARNING</span><h2 id="education-title">교육</h2><p>배우고, 적용하고, 확장하기.</p></div>
            <div className="section-content">{education.map(item => <article className="education-item" key={item.title}><p className="item-period">{item.period}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          </section>
        </main>
        <footer><div><a className="wordmark" href="#top">giwon<span>.</span></a><p>작동하는 결과물로 이야기하겠습니다.</p><small>2026.08.05 이력서 기준 · 재직 및 프로젝트 기간은 원문 기준입니다.</small></div><a className="back-top" href="#top">맨 위로 <FiArrowUp aria-hidden="true" /></a></footer>
      </div>
    </>
  )
}
export default App
