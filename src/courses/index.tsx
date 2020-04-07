import * as React from 'react';

import { FormattedMessage } from 'react-intl';

import { Course, CourseLevel } from './course';
import { Season, Semester } from './semester';

export default function Courses() {
  return (
    <div>
      <p>
        <FormattedMessage
        id="courses.introduction"
        defaultMessage="These are the courses that I took in university."
        />
      </p>

      <ul className="unmarked">
        <li>* &ndash;
          <FormattedMessage
            id="courses.masters-level"
            defaultMessage="denotes a Masters-level course"
          />
        </li>
        <li>† &ndash;
          <FormattedMessage
            id="courses.phd-level"
            defaultMessage="denotes a PhD-level course"
          />
        </li>
      </ul>

      <Semester
        seasonId={Season.SPRING}
        year={2011}
      >
        <Course
          defaultName="Fundamentals of Artificial Intelligence"
          level={CourseLevel.MASTER}
          nameId="courses.fundamentals-of-ai"
          teacher="Carole Hafner"
        />
        <Course
          defaultName="Network Security"
          level={CourseLevel.MASTER}
          nameId="courses.network-security"
          teacher="Ravi Sundaram"
        />
      </Semester>

      <Semester
        commentId="semester.comment.amazon-coop"
        defaultComment="On co-op with Amazon.com"
        seasonId={Season.SUMMER2_FALL}
        year={2010}
      />

      <Semester
        seasonId={Season.SUMMER1}
        year={2010}
      >
        <Course
          defaultName="Directed Study (DMTCP/OpenMPI)"
          level={CourseLevel.MASTER}
          nameId="courses.directed-study-dmtcp-openmpi"
          teacher="Gene Cooperman"
        />
        <Course
          defaultName="Mobile Application Development"
          nameId="courses.mobile-application-development"
          teacher="Pong Choa"
        />
      </Semester>

      <Semester
        seasonId={Season.SPRING}
        year={2010}
      >
        <Course
          defaultName="Group Theory"
          nameId="courses.group-theory"
          teacher="Anthony Iarrobino"
        />
        <Course
          defaultName="Computers and Society"
          nameId="courses.computers-and-society"
          teacher="Judith Perrolle"
        />
        <Course
          defaultName="Intensive Operating Systems"
          level={CourseLevel.PHD}
          nameId="courses.intensive-operating-systems"
          teacher="Peter Desnoyers"
        />
        <Course
          defaultName="Software Development"
          nameId="courses.software-development"
          teacher="William Clinger"
        />
      </Semester>

      <Semester
        commentId="semester.comment.jf-oberlin"
        defaultComment="Studying abroad at J.F. Oberlin University in Machida, Tokyo, Japan"
        seasonId={Season.FALL}
        year={2009}
      >
        <Course defaultName="本語 II-B (Japanese II-B)" />
        <Course defaultName="日本の神話学 (Japanese Mythology)" />
        <Course defaultName="経験の日本語 (Experiential Japanese)" />
        <Course defaultName="漢字 I (Kanji I)" />
      </Semester>

      <Semester
        seasonId={Season.SUMMER1}
        year={2009}
      >
        <Course
          defaultName="Physics 2 for Engineers"
          nameId="courses.physics-2"
          teacher="Henry Smith"
        />
        <Course
          defaultName="Public Policy and Administration"
          nameId="courses.public-policy"
          teacher="Michael Dukakis"
        />
      </Semester>

      <Semester
        seasonId={Season.SPRING}
        year={2009}
      >
        <Course
          defaultName="Physics 1 for Engineers"
          nameId="courses.physics-1"
          teacher="Henry Smith"
        />
        <Course
          defaultName="Writing for the Technical Professions"
          nameId="courses.writing-technical"
          teacher="Tom Akbari"
        />
        <Course
          defaultName="Research in High-Performance Computing"
          level={CourseLevel.MASTER}
          nameId="courses.research-hpc"
          teacher="Gene Cooperman"
        />
        <Course
          level={CourseLevel.MASTER}
          defaultName="Algorithms"
          nameId="courses.algorithms"
          teacher="Virgil Pavlu"
        />
      </Semester>

      <Semester
        commentId="semester.comment.amazon-coop"
        defaultComment="On co-op with Amazon.com"
        seasonId={Season.SUMMER2_FALL}
        year={2008}
      />

      <Semester
        seasonId={Season.SPRING}
        year={2008}
      >
        <Course
          defaultName="Japanese Literature and Culture"
          nameId="courses.japanese-literature"
          teacher="Tom Havens"
        />
        <Course
          defaultName="General Purpose GPU Programming"
          nameId="courses.gpu-programming"
          teacher="Gene Cooperman"
        />
        <Course
          level={CourseLevel.MASTER}
          defaultName="Compilers"
          nameId="courses.compilers"
          teacher="Jesse Tov"
        />
        <Course
          defaultName="Directed Study (DMTCP)"
          nameId="courses.directed-study-dmtcp"
          teacher="Gene Cooperman"
        />
      </Semester>

      <Semester
        seasonId={Season.FALL}
        year={2007}
      >
        <Course
          defaultName="Probability and Statistics"
          nameId="courses.probability"
          teacher="Aidong Ding"
        />
        <Course
          defaultName="Theory of Computation"
          nameId="courses.theory-of-computation"
          teacher="Viera Proulx"
        />
        <Course
          defaultName="Computer Organization"
          nameId="courses.computer-organization"
          teacher="Gene Cooperman"
        />
        <Course
          level={CourseLevel.MASTER}
          defaultName="Principles of Programming Languages"
          nameId="courses.principles-of-pl"
          teacher="Karl Lieberherr"
        />
      </Semester>

      <Semester
        seasonId={Season.SPRING}
        year={2007}
      >
        <Course
          defaultName="Symbolic Logic"
          nameId="courses.symbolic-logic"
          teacher="Michael Meyer"
        />
        <Course
          defaultName="Linear Algebra"
          nameId="courses.linear-algebra"
          teacher="Eugene Gover"
        />
        <Course
          defaultName="Calculus 3 for Science / Engineering"
          nameId="courses.calculus-3"
          teacher="Robert Lupi"
        />
        <Course
          defaultName="Honors Freshman Seminar"
          nameId="courses.freshman-seminar"
          teacher="Richard Rasala"
        />
        <Course
          defaultName="Directed Study (ACL2)"
          nameId="courses.directed-study-acl2"
          teacher="Dale Vaillancourt"
        />
        <Course
          defaultName="Object-Oriented Design"
          nameId="courses.object-oriented"
          teacher="Carole Hafner"
        />
        <Course
          defaultName="CS/IS Overview"
          nameId="courses.cs-is"
          teacher="Melvin Simms"
        />
      </Semester>

      <Semester
        seasonId={Season.FALL}
        year={2006}
      >
        <Course
          defaultName="Fundamentals of Computer Science 1"
          nameId="courses.fundies-1"
          teacher="Matthias Felleisen"
        />
        <Course
          defaultName="Honors Introduction to Philosophy"
          nameId="courses.philosophy"
          teacher="William DeAngelis"
        />
        <Course
          defaultName="Discrete Mathematics"
          nameId="courses.discrete-math"
          teacher="Javed Aslam"
        />
        <Course
          defaultName="Calculus 2 for Science / Engineering"
          nameId="courses.calculus-2"
          teacher="Robert Lupi"
        />
        <Course
          defaultName="Honors Freshman Seminar"
          nameId="courses.freshman-seminar"
          teacher="Richard Rasala"
        />
        <Course
          defaultName="CS/IS Overview"
          nameId="courses.cs-is"
          teacher="Melvin Simms"
        />
      </Semester>
    </div>
  );
}
