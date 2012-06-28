#include "DndResourcesEditor.h"
#include "GDL/IDE/Dialogs/ResourcesEditor.h"
#include "GDCore/CommonTools.h"
#include <iostream>

bool DndTextResourcesEditor::OnDropText(wxCoord x, wxCoord y, const wxString& text)
{
    std::vector<std::string > command = gd::SplitString<std::string>(gd::ToString(text), ';');

    if ( command.size() < 3 ) return true; //The resource editor is expecting a specifically formatted string
    if ( command[0] != "COPYANDADDRESOURCES") return true;

    std::vector<std::string > files;
    for (unsigned int i = 2;i<command.size();++i)
    {
        files.push_back(command[i]);
    }

    editor.CopyAndAddResources(files, command[1]);

    return true;
}