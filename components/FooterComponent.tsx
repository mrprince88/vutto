export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Why choose Zutto?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Zutto's team of bike enthusiasts, mechanics and auto experts brings together decades of experience to help
              you find the perfect bike.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Buy used bikes</li>
              <li>Sell your bike</li>
              <li>Bike loans</li>
              <li>Bike insurance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Zutto</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Zutto</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Popular searches</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Used bikes in Bangalore</li>
              <li>Cars used bikes</li>
              <li>Cheap bikes in Bangalore</li>
              <li>Bikes under 50000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Connect with us</span>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs">ig</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs">tw</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs">yt</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600">© 2024 Zutto</div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <img src="/blue-motorcycle-illustration.png" alt="Footer illustration" className="mx-auto h-32 w-auto" />
        </div>
      </div>
    </footer>
  )
}
