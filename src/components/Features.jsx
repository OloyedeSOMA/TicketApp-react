import TicketIcon from '../assets/icons/Ticket.svg';
import ChartIcon from '../assets/icons/chart.svg';
import CheckIcon from '../assets/icons/check.svg';
import ZapIcon from '../assets/icons/zap.svg';

const features = [
  {
    Icon: TicketIcon,
    color: 'bg-blue-100 text-blue-600',
    title: 'Create Tickets',
    desc: 'Quickly create and organize support tickets with detailed descriptions and priorities.',
  },
  {
    Icon: ChartIcon,
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Track Progress',
    desc: 'Monitor ticket status in real-time and keep your team aligned on priorities.',
  },
  {
    Icon: CheckIcon,
    color: 'bg-green-100 text-green-600',
    title: 'Resolve Issues Faster',
    desc: 'Streamline your workflow and close tickets efficiently with smart organization.',
  },
  {
    Icon: ZapIcon,
    color: 'bg-purple-100 text-purple-600',
    title: 'Boost Productivity',
    desc: 'Increase team efficiency with intuitive tools and clear visibility into all tickets.',
  },
];

export default function Features() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ Icon, color, title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                <img src={Icon} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}