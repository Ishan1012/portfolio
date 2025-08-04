import PdfViewer from '@/components/TaskCollection/PdfViewer';
import BackgroundSettings from '@/components/TaskCollection/BackgroundSettings';
import ManualFile from '@/components/TaskCollection/ManualFile';
import FolderExplorer from '@/components/TaskCollection/FolderExplorer';
import Terminal from '@/components/TaskCollection/Terminal';
import DemoProjects from '@/components/TaskCollection/DemoProjects';
import ChatBot from '@/components/TaskCollection/ChatBot';

export default function generateTaskList(requirementsForm) {

    const [backgrounds, setSelectedBackground] = requirementsForm;

    const taskList = [
        {
            name: 'resume',
            filename: 'resume.pdf',
            icon: 'pdf.png',
            content: <PdfViewer filename="resume.pdf" />,
            isDark: false,
        },
        {
            name: 'projects',
            filename: 'projects',
            icon: 'folder.png',
            content: <FolderExplorer />,
            isDark: false,
        },
        {
            name: 'terminal',
            filename: 'terminal.cmd',
            icon: 'terminal.png',
            content: <Terminal />,
            isDark: true,
        },
        {
            name: 'contact',
            filename: 'contact.docs',
            icon: 'word.png',
            content: <ManualFile />,
            isDark: false,
        },
        {
            name: 'manual',
            filename: 'manual.txt',
            icon: 'txt.png',
            content: <ManualFile />,
            isDark: false,
        },
        {
            name: 'demo',
            filename: 'demo.html',
            icon: 'chrome.png',
            content: <DemoProjects />,
            isDark: false,
        },
        {
            name: 'settings',
            filename: 'settings',
            icon: 'settings.svg',
            content: <BackgroundSettings background={backgrounds} setSelectedBackground={setSelectedBackground} />,
            isDark: false,
        },
        {
            name: 'chatbot',
            filename: 'chatbot.exe',
            icon: 'chatbot.png',
            content: <ChatBot />,
            isDark: false,
        },
    ];

    return taskList;
}
