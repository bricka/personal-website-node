/* tslint:disable:max-line-length */

import * as React from 'react';

export default function MipsVimHighlightingProjectEnglish() {
  return (
    <div>
      <p>
        Ich liebe den Vim Texteditor.  Aber als ich Computer-Organisation in der Universität nahm, lernte ich, dass Vim MIPS nicht unterstützte.  Ja, es unterstützte GNU Assembly, aber das funkionierte nicht besonders gut mit MIPS.  Deshalb habe ich beschlossen, MIPS Syntax-Highlighting zu schreiben.
      </p>

      <p>
        Das Link zum Skript ist hier.  Stellen Sie es in Ihrem Vim Syntax directory (auf UNIX ist das <code>~/.vim/syntax</code>), und Sie können mit <code>:set syntax=mips</code> es verwenden.
      </p>

      <p>
        <a href="http://www.vim.org/scripts/script.php?script_id=2045">
          Das MIPS Syntax-Highlighting für Vim
        </a>
      </p>
    </div>
  );
}
