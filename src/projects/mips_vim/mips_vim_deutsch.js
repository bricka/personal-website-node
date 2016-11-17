import React from 'react';

export default function MipsVimHighlightingProjectEnglish() {
  return (
    <div>
      <p>
        Ich liebe den Texteditor von Vim.  Aber, wenn ich Computer-Organisation in der Schule nahm, ich lernte, dass Vim MIPS nicht unterstützte.  Ja, es unterstützte GNU Assembly, aber das funkionierte nicht gut.  Deshalb habe ich beschlossen, MIPS-Syntax-Hervoerhebung zu schreiben.
      </p>

      <p>
        Das Link zum Skript ist hier.  Stellen Sie es in Ihrem Verzeichnis von Syntax (im UNIX, das ist <code>~/.vim/syntax</code>), und Sie können mit <code>:set syntax=mips</code> es möglichen.
      </p>

      <p>
        <a href="http://www.vim.org/scripts/script.php?script_id=2045">
          Das MIPS-Syntax-Hervoerhebung für Vim
        </a>
      </p>
    </div>
  );
}
