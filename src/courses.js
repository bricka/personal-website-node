import React, { Component, PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';

const SPRING = 'spring';
const FALL = 'fall';
const SUMMER2_FALL = 'summer2-fall';
const SUMMER1 = 'summer-1';

const seasonIntlData = {
  [SPRING]: {
    id: 'spring',
    defaultMessage: 'Spring'
  },
  [FALL]: {
    id: 'fall',
    defaultMessage: 'Fall'
  },
  [SUMMER2_FALL]: {
    id: 'summer-2-and-fall',
    defaultMessage: 'Summer 2 and Fall'
  },
  [SUMMER1]: {
    id: 'summer-1',
    defaultMessage: 'Summer 1'
  }
};

class Semester extends Component {
  static propTypes = {
    children: PropTypes.node,
    commentId: PropTypes.string,
    defaultComment: PropTypes.string,
    seasonId: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  };

  render = () => (
    <div>
      <h2>
        <FormattedMessage
          {...seasonIntlData[this.props.seasonId]}
        />
        &nbsp;
        {this.props.year}
      </h2>

      {this.props.commentId && (
         <p className="comment">
           {this.props.comment}
           <FormattedMessage
             id={this.props.commentId}
             defaultMessage={this.props.defaultComment}
            />
         </p>
      )}

      <ul>
        {this.props.children}
      </ul>
    </div>
  );
}

class Class extends Component {
  static propTypes = {
    defaultName: PropTypes.string.isRequired,
    masters: PropTypes.bool,
    nameId: PropTypes.string.isRequired,
    phd: PropTypes.bool,
    teacher: PropTypes.string
  };

  render = () => (
    <li>
      <span className="class-name">
        {this.props.nameId ? (
          <FormattedMessage
            id={this.props.nameId}
            defaultMessage={this.props.defaultName}
          />
        ) : (
          this.props.defaultName
        )}
        {this.props.masters && '*'}
        {this.props.phd && '†'}
      </span>
      &nbsp;
      {this.props.teacher && `(${this.props.teacher})`}
    </li>
  );
}

export default function Courses() {
  return (
    <div>
      <ul class="unmarked">
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
        seasonId={SPRING}
        year={2011}
      >
        <Class
          defaultName="Fundamentals of Artificial Intelligance"
          masters={true}
          nameId="courses.fundamentals-of-ai"
          teacher="Carole Hafner"
        />
        <Class
          defaultName="Network Security"
          masters={true}
          nameId="courses.network-security"
          teacher="Ravi Sundaram"
        />
      </Semester>

      <Semester
        commentId="semester.comment.amazon-coop"
        defaultComment="On co-op with Amazon.com"
        seasonId={SUMMER2_FALL}
        year={2010}
      />

      <Semester
        seasonId={SUMMER1}
        year={2010}
      >
        <Class
          defaultName="Directed Study (DMTCP/OpenMPI)"
          masters={true}
          nameId="courses.directed-study-dmtcp-openmpi"
          teacher="Gene Cooperman"
        />
        <Class
          defaultName="Mobile Application Development"
          nameId="courses.mobile-application-development"
          teacher="Pong Choa"
        />
      </Semester>

      <Semester
        seasonId={SPRING}
        year={2010}
      >
        <Class
          defaultName="Group Theory"
          nameId="courses.group-theory"
          teacher="Anthony Iarrobino"
        />
        <Class
          defaultName="Computers and Society"
          nameId="courses.computers-and-society"
          teacher="Judith Perrolle"
        />
        <Class
          defaultName="Intensive Operating Systems"
          nameId="courses.intensive-operating-systems"
          phd={true}
          teacher="Peter Desnoyers"
        />
        <Class
          defaultName="Software Development"
          nameId="courses.software-development"
          teacher="William Clinger"
        />
      </Semester>

      <Semester
        commentId="semester.comment.jf-oberlin"
        defaultComment="Studying abroad at J.F. Oberlin University in Machida, Tokyo, Japan"
        seasonId={FALL}
        year={2009}
      >
        <Class defaultName="本語 II-B (Japanese II-B)" />
        <Class defaultName="日本の神話学 (Japanese Mythology)" />
        <Class defaultName="経験の日本語 (Experiential Japanese)" />
        <Class defaultName="漢字 I (Kanji I)" />
      </Semester>

      <Semester
        name="Summer 1 2009"
        seasonId={SUMMER1}
        year={2009}
      >
        <Class
          defaultName="Physics 2 for Engineers"
          nameId="courses.physics-2"
          teacher="Henry Smith"
        />
        <Class
          defaultName="Public Policy and Administration"
          nameId="courses.public-policy"
          teacher="Michael Dukakis"
        />
      </Semester>

      <Semester
        seasonId={SPRING}
        year={2009}
      >
        <Class
          defaultName="Physics 1 for Engineers"
          nameId="courses.physics-1"
          teacher="Henry Smith"
        />
        <Class
          defaultName="Writing for the Technical Professions"
          nameId="courses.writing-technical"
          teacher="Tom Akbari"
        />
        <Class
          defaultName="Research in High-Performance Computing"
          masters={true}
          nameId="courses.research-hpc"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          defaultName="Algorithms"
          nameId="courses.algorithms"
          teacher="Virgil Pavlu"
        />
      </Semester>

      <Semester
        commentId="semester.comment.amazon-coop"
        defaultComment="On co-op with Amazon.com"
        seasonId={SUMMER2_FALL}
        year={2008}
      />

      <Semester
        seasonId={SPRING}
        year={2008}
      >
        <Class
          defaultName="Japanese Literature and Culture"
          nameId="courses.japanese-literature"
          teacher="Tom Havens"
        />
        <Class
          defaultName="General Purpose GPU Programming"
          nameId="courses.gpu-programming"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          defaultName="Compilers"
          nameId="courses.compilers"
          teacher="Jesse Tov"
        />
        <Class
          defaultName="Directed Study (DMTCP)"
          nameId="courses.directed-study-dmtcp"
          teacher="Gene Cooperman"
        />
      </Semester>

      <Semester
        seasonId={FALL}
        year={2007}
      >
        <Class
          defaultName="Probability and Statistics"
          nameId="courses.probability"
          teacher="Aidong Ding"
        />
        <Class
          defaultName="Theory of Computation"
          nameId="courses.theory-of-computation"
          teacher="Viera Proulx"
        />
        <Class
          defaultName="Computer Organization"
          nameId="courses.computer-organization"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          defaultName="Principles of Programming Languages"
          nameId="courses.principles-of-pl"
          teacher="Karl Lieberherr"
        />
      </Semester>

      <Semester
        seasonId={SPRING}
        year={2007}
      >
        <Class
          defaultName="Symbolic Logic"
          nameId="courses.symbolic-logic"
          teacher="Michael Meyer"
        />
        <Class
          defaultName="Linear Algebra"
          nameId="courses.linear-algebra"
          teacher="Eugene Gover"
        />
        <Class
          defaultName="Calculus 3 for Science / Engineering"
          nameId="courses.calculus-3"
          teacher="Robert Lupi"
        />
        <Class
          defaultName="Honors Freshman Seminar"
          nameId="courses.freshman-seminar"
          teacher="Richard Rasala"
        />
        <Class
          defaultName="Directed Study (ACL2)"
          nameId="courses.directed-study-acl2"
          teacher="Dale Vaillancourt"
        />
        <Class
          defaultName="Object-Oriented Design"
          nameId="courses.object-oriented"
          teacher="Carole Hafner"
        />
        <Class
          defaultName="CS/IS Overview"
          nameId="courses.cs-is"
          teacher="Melvin Simms"
        />
      </Semester>

      <Semester
        seasonId={FALL}
        year={2006}
      >
        <Class
          defaultName="Fundamentals of Computer Science 1"
          nameId="courses.fundies-1"
          teacher="Matthias Felleisen"
        />
        <Class
          defaultName="Honors Introduction to Philosophy"
          nameId="courses.philosophy"
          teacher="William DeAngelis"
        />
        <Class
          defaultName="Discrete Mathematics"
          nameId="courses.discrete-math"
          teacher="Javed Aslam"
        />
        <Class
          defaultName="Calculus 2 for Science / Engineering"
          nameId="courses.calculus-2"
          teacher="Robert Lupi"
        />
        <Class
          defaultName="Honors Freshman Seminar"
          nameId="courses.freshman-seminar"
          teacher="Richard Rasala"
        />
        <Class
          defaultName="CS/IS Overview"
          nameId="courses.cs-is"
          teacher="Melvin Simms"
        />
      </Semester>
    </div>
  );
}
