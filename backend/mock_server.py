import json
from http.server import BaseHTTPRequestHandler, HTTPServer

class MockHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type, Authorization")
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        if self.path == '/api/v1/cycle/insights':
            response = {
                "current_day": 14,
                "phase_name": "Ovulatory Phase",
                "next_period_in_days": 14,
                "proactive_insight": "Your last 3 cycles have been very regular. Based on your logs, you might experience mild skin changes in 4 days."
            }
            self.wfile.write(json.dumps(response).encode())
            
        elif self.path == '/api/v1/logs':
            response = [
                {"date": "2024-05-01", "flow": "Heavy", "mood": "Tired"},
                {"date": "2024-05-02", "flow": "Medium", "mood": "Anxious"},
                {"date": "2024-05-07", "flow": "None", "mood": "Happy"},
                {"date": "2024-05-17", "flow": "None", "mood": "Tired"},
                {"date": "2024-05-22", "flow": "None", "mood": "Anxious"}
            ]
            self.wfile.write(json.dumps(response).encode())

    def do_POST(self):
        self.send_response(201)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        if self.path == '/api/v1/logs':
            response = {"status": "success", "message": "Log saved successfully."}
            self.wfile.write(json.dumps(response).encode())

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, MockHandler)
    print("Zero-dependency Mock API Server running on port 8000...")
    httpd.serve_forever()
