import React, { Component, PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';

import { isArray } from 'lodash';

class Semester extends Component {
  static propTypes = {
    children: PropTypes.node,
    comment: PropTypes.string,
    name: PropTypes.string.isRequired,
    seasonId: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  };

  render = () => (
    <div>
      <h2>{this._getSeasonString()} {this.props.year}</h2>

      {this.props.comment && (
        <p className="semester-comment">{this.props.comment}</p>
      )}

      <ul>
        {this.props.children}
      </ul>
    </div>
  );

  _getSeasonString = () => {
    if (isArray(this.props.season)) {
      return this.props.season.join(' and ');
    }

    return this.props.season;
  };
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
        seasonId="spring"
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
        comment="On co-op with Amazon.com"
        seasonId="summer-2-and-fall"
        year={2010}
      />

      <Semester
        seasonId="summer-1"
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
        seasonId="spring"
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
        comment="Studying abroad at J.F. Oberlin University in Machida, Tokyo, Japan"
        seasonId="fall"
        year={2009}
      >
        <Class defaultName="本語 II-B (Japanese II-B)" />
        <Class defaultName="日本の神話学 (Japanese Mythology)" />
        <Class defaultName="経験の日本語 (Experiential Japanese)" />
        <Class defaultName="漢字 I (Kanji I)" />
      </Semester>

      <Semester
        name="Summer 1 2009"
        seasonId="summer-1"
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
        seasonId="spring"
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
        comment="On co-op with Amazon.com"
        seasonId="summer-2-and-fall"
        year={2008}
      />

      <Semester
        seasonId="spring"
        year={2008}
      >
        <Class
          defaultName="Japanese Literature and Culture"
          teacher="Tom Havens"
        />
        <Class
          defaultName="General Purpose GPU Programming"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          defaultName="Compilers"
          teacher="Jesse Tov"
        />
        <Class
          defaultName="Directed Study (DMTCP)"
          teacher="Gene Cooperman"
        />
      </Semester>

      <Semester
        seasonId="spring"
        year={2007}
      >
        <Class
          defaultName="Probability and Statistics"
          teacher="Aidong Ding"
        />
        <Class
          defaultName="Theory of Computation"
          teacher="Viera Proulx"
        />
        <Class
          defaultName="Computer Organization"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          defaultName="Principles of Programming Languages"
          teacher="Karl Lieberherr"
        />
      </Semester>

      <Semester
        seasonId="spring"
        year={2007}
      >
        <Class
          defaultName="Symbolic Logic"
          teacher="Michael Meyer"
        />
        <Class
          defaultName="Linear Algebra"
          teacher="Eugene Gover"
        />
        <Class
          defaultName="Calculus 3 for Science / Engineering"
          teacher="Robert Lupi"
        />
        <Class
          defaultName="Honors Freshman Seminar"
          teacher="Richard Rasala"
        />
        <Class
          defaultName="Directed Study (ACL2)"
          teacher="Dale Vaillancourt"
        />
        <Class
          defaultName="Object-Oriented Design"
          teacher="Carole Hafner"
        />
        <Class
          defaultName="CS/IS Overview"
          teacher="Melvin Simms"
        />
      </Semester>

      <Semester
        seasonId="fall"
        year={2006}
      >
        <Class
          defaultName="Fundamentals of Computer Science 1"
          teacher="Matthias Felleisen"
        />
        <Class
          defaultName="Honors Introduction to Philosophy"
          teacher="William DeAngelis"
        />
        <Class
          defaultName="Discrete Mathematics"
          teacher="Javed Aslam"
        />
        <Class
          defaultName="Calculus 2 for Science / Engineering"
          teacher="Robert Lupi"
        />
        <Class
          defaultName="Honors Freshman Seminar"
          teacher="Richard Rasala"
        />
        <Class
          defaultName="CS/IS Overview"
          teacher="Melvin Simms"
        />
      </Semester>
    </div>
  );
}
