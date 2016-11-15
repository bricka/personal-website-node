import React, { Component, PropTypes } from 'react';

class Semester extends Component {
  static propTypes = {
    children: PropTypes.node,
    comment: PropTypes.string,
    name: PropTypes.string.isRequired
  };

  render = () => (
    <div>
      <h2>{this.props.name}</h2>

      {this.props.comment && (
        <p className="semester-comment">{this.props.comment}</p>
      )}

      <ul>
        {this.props.children}
      </ul>
    </div>
  );
}

class Class extends Component {
  static propTypes = {
    masters: PropTypes.bool,
    name: PropTypes.string.isRequired,
    phd: PropTypes.bool,
    teacher: PropTypes.string
  };

  render = () => (
    <li>
      <span className="class-name">
        {this.props.name}
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
          <li>* &ndash; denotes a Masters-level course</li>
          <li>† &ndash; denotes a PhD-level course</li>
      </ul>

      <Semester name="Spring 2011">
        <Class
          masters={true}
          name="Fundamentals of Artificial Intelligance"
          teacher="Carole Hafner"
        />
        <Class
          masters={true}
          name="Network Security"
          teacher="Ravi Sundaram"
        />
      </Semester>

      <Semester
        comment="On co-op with Amazon.com"
        name="Summer 2 and Fall 2010"
      />

      <Semester name="Summer 1 2010">
        <Class
          masters={true}
          name="Directed Study (DMTCP/OpenMPI)"
          teacher="Gene Cooperman"
        />
        <Class
          name="Mobile Application Development"
          teacher="Pong Choa"
        />
      </Semester>

      <Semester name="Spring 2010">
        <Class
          name="Group Theory"
          teacher="Anthony Iarrobino"
        />
        <Class
          name="Computers and Society"
          teacher="Judith Perrolle"
        />
        <Class
          name="Intensive Operating Systems"
          phd={true}
          teacher="Peter Desnoyers"
        />
        <Class
          name="Software Development"
          teacher="William Clinger"
        />
      </Semester>

      <Semester
        comment="Studying abroad at J.F. Oberlin University in Machida, Tokyo, Japan"
        name="Fall 2009"
      >
        <Class name="本語 II-B (Japanese II-B)" />
        <Class name="日本の神話学 (Japanese Mythology)" />
        <Class name="経験の日本語 (Experiential Japanese)" />
        <Class name="漢字 I (Kanji I)" />
      </Semester>

      <Semester name="Summer 1 2009">
        <Class
          name="Physics 2 for Engineers"
          teacher="Henry Smith"
        />
        <Class
          name="Public Policy and Administration"
          teacher="Michael Dukakis"
        />
      </Semester>

      <Semester name="Spring 2009">
        <Class
          name="Physics 1 for Engineers"
          teacher="Henry Smith"
        />
        <Class
          name="Writing for the Technical Professions"
          teacher="Tom Akbari"
        />
        <Class
          masters={true}
          name="Research in High-Performance Computing"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          name="Algorithms"
          teacher="Virgil Pavlu"
        />
      </Semester>

      <Semester
        comment="On co-op with Amazon.com"
        name="Summer 2 and Fall 2008"
      />

      <Semester name="Spring 2008">
        <Class
          name="Japanese Literature and Culture"
          teacher="Tom Havens"
        />
        <Class
          name="General Purpose GPU Programming"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          name="Compilers"
          teacher="Jesse Tov"
        />
        <Class
          name="Directed Study (DMTCP)"
          teacher="Gene Cooperman"
        />
      </Semester>

      <Semester name="Spring 2007">
        <Class
          name="Probability and Statistics"
          teacher="Aidong Ding"
        />
        <Class
          name="Theory of Computation"
          teacher="Viera Proulx"
        />
        <Class
          name="Computer Organization"
          teacher="Gene Cooperman"
        />
        <Class
          masters={true}
          name="Principles of Programming Languages"
          teacher="Karl Lieberherr"
        />
      </Semester>

      <Semester name="Spring 2007">
        <Class
          name="Symbolic Logic"
          teacher="Michael Meyer"
        />
        <Class
          name="Linear Algebra"
          teacher="Eugene Gover"
        />
        <Class
          name="Calculus 3 for Science / Engineering"
          teacher="Robert Lupi"
        />
        <Class
          name="Honors Freshman Seminar"
          teacher="Richard Rasala"
        />
        <Class
          name="Directed Study (ACL2)"
          teacher="Dale Vaillancourt"
        />
        <Class
          name="Object-Oriented Design"
          teacher="Carole Hafner"
        />
        <Class
          name="CS/IS Overview"
          teacher="Melvin Simms"
        />
      </Semester>

      <Semester name="Fall 2006">
        <Class
          name="Fundamentals of Computer Science 1"
          teacher="Matthias Felleisen"
        />
        <Class
          name="Honors Introduction to Philosophy"
          teacher="William DeAngelis"
        />
        <Class
          name="Discrete Mathematics"
          teacher="Javed Aslam"
        />
        <Class
          name="Calculus 2 for Science / Engineering"
          teacher="Robert Lupi"
        />
        <Class
          name="Honors Freshman Seminar"
          teacher="Richard Rasala"
        />
        <Class
          name="CS/IS Overview"
          teacher="Melvin Simms"
        />
      </Semester>
    </div>
  );
}
