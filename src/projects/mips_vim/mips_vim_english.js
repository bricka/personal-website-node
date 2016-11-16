import React from 'react';

export default function MipsVimHighlightingProjectEnglish() {
  return (
    <div>
      <p>
        I am a rabid fan of the Vim text editor. However, while taking Computer Organization in my sophomore year of college, I realized that Vim did not support MIPS, the Assembly language that we were using in class. Sure it supports GNU Assembly and some other sorts that work somewhat acceptably for MIPS, but I didn't love them. And so I took it upon myself to produce such a syntax highlighting file. The result can be found here.
      </p>

      <p>
        It should be noted that as opposed to the way that the GNU Assembly highlighting works, the MIPS highlighting supports only those instructions that are actually in the language. If an instruction is not recognized, or if something is recognized that should not be, please contact me. My thanks.
      </p>

      <p>
        In any event, the link to the script is just below here. Just place it into your syntax directory (on UNIX, this is <code>~/.vim/syntax/</code>) and you will be able to set the syntax by using the command (from within Vim) <code>:set syntax=mips</code>.
      </p>

      <p>
        <a href="http://www.vim.org/scripts/script.php?script_id=2045">
          The MIPS Syntax Highlighting for Vim
        </a>
      </p>
    </div>
  );
}
