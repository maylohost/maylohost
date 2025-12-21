# CryptoGeek Store - Technical Documentation

## Overview

CryptoGeek Store is a peer-to-peer e-commerce platform designed for buying and selling digital and physical products with Bitcoin payments and an integrated escrow system. The platform provides a secure marketplace where users can transact directly with each other, protected by automated escrow services and comprehensive order management.

## Technology Stack

### Frontend Framework
- **Next.js 16** - React-based framework with App Router for server-side rendering and static generation
- **TypeScript** - Type-safe development for improved code quality and maintainability
- **React 18** - Modern UI library with hooks and concurrent features
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Backend & Database
- **Firebase Firestore** - NoSQL document database for real-time data synchronization
- **Firebase Storage** - Cloud storage for product images and user uploads
- **Firebase Authentication** - User authentication and authorization system
- **Firebase Cloud Functions** - Serverless backend functions for payment processing and notifications

### Payment Infrastructure
- **Bitcoin Integration** - Native Bitcoin payment processing
- **HD Wallet System** - Hierarchical Deterministic wallet for address generation
- **Mempool Monitoring** - Real-time payment verification through blockchain monitoring
- **Escrow System** - Automated escrow service protecting both buyers and sellers

### Additional Services
- **Resend API** - Transactional email service for order notifications
- **Google Gemini AI** - AI-powered chatbot assistant (Lucy)
- **Exchange Rate APIs** - Real-time Bitcoin to fiat currency conversion rates

## Architecture Overview

### Frontend Architecture
The application follows a component-based architecture with:
- **Server Components** - For initial page loads and SEO optimization
- **Client Components** - For interactive features requiring browser APIs
- **Custom Hooks** - Reusable logic for authentication, translations, and data fetching
- **API Routes** - Next.js API routes for server-side operations

### Backend Architecture
- **Firebase Functions** - Event-driven serverless functions triggered by Firestore changes
- **Cloud Functions** - Payment monitoring, email notifications, and order processing
- **Firestore Triggers** - Real-time database triggers for automated workflows

### Database Structure
The platform uses Firestore collections for:
- **Users** - User profiles, seller approvals, and authentication data
- **Products** - Product listings with images, pricing, and metadata
- **Orders** - Order management with payment status and tracking
- **Chats** - Real-time messaging between buyers and sellers
- **Reviews** - User feedback and rating system
- **Notifications** - In-app notification system
- **Wishlists** - User product wishlists

## Core Features

### User Management
- **Registration & Authentication** - Email-based authentication with Firebase Auth
- **Profile Management** - Complete user profiles with seller status
- **Seller Approval System** - Admin-moderated seller registration process
- **Multi-language Support** - Italian and English localization

### Product Management
- **Product Listings** - Create, edit, and manage product listings
- **Image Upload** - Multi-image support with cropping and optimization
- **Category System** - Hierarchical category and subcategory organization
- **Product Moderation** - Admin approval workflow for new products
- **Stock Management** - Inventory tracking and quantity management

### Payment System
- **Bitcoin Payments** - Native Bitcoin payment processing
- **Dynamic Address Generation** - Unique Bitcoin addresses per order
- **Payment Verification** - Real-time monitoring of blockchain transactions
- **Escrow Protection** - Automated escrow holding funds until order completion
- **Partial Payment Support** - Handling of partial payments and refunds
- **Transaction Tracking** - Complete transaction history with blockchain links

### Order Management
- **Order Lifecycle** - Complete order tracking from creation to completion
- **Status Management** - Order status updates (pending, paid, shipped, completed)
- **Buyer & Seller Views** - Separate interfaces for order management
- **Order History** - Complete transaction history for users
- **Admin Oversight** - Administrative tools for order monitoring and dispute resolution

### Communication System
- **Real-time Chat** - Direct messaging between buyers and sellers
- **Pre-order Chat** - Communication before purchase completion
- **Order-specific Chat** - Chat threads linked to specific orders
- **Notification System** - Real-time in-app notifications for order updates

### Review & Rating System
- **User Reviews** - Post-transaction review system
- **Seller Ratings** - Aggregate seller rating and review counts
- **Review Moderation** - Admin oversight of review content
- **Trust Badges** - Trusted seller verification system

### Admin Features
- **Product Moderation** - Approve or reject product listings
- **Seller Management** - Approve seller applications and manage seller status
- **Order Monitoring** - Escrow order management and oversight
- **User Management** - User administration and support tools
- **Analytics Dashboard** - Platform statistics and metrics

## Firebase Integration

### Firestore Database
- **Real-time Synchronization** - Live updates across all connected clients
- **Security Rules** - Comprehensive security rules protecting user data
- **Indexed Queries** - Optimized database queries with composite indexes
- **Transaction Support** - Atomic operations for critical data updates

### Firebase Storage
- **Image Storage** - Secure storage for product images and user uploads
- **Access Control** - Storage security rules controlling file access
- **Image Processing** - Server-side image optimization and resizing
- **CDN Integration** - Fast global content delivery

### Firebase Authentication
- **Email/Password Auth** - Standard email-based authentication
- **Email Verification** - Email verification workflow for new users
- **Session Management** - Secure session handling and token management
- **User Profiles** - Extended user profile data in Firestore

### Firebase Cloud Functions
- **Payment Monitoring** - Automated Bitcoin payment verification
- **Email Notifications** - Transactional emails for order updates
- **Order Processing** - Automated order status updates and workflows
- **Data Synchronization** - Cross-collection data updates and triggers

## Payment Flow

### Order Creation
1. Buyer selects product and quantity
2. System calculates total price including escrow fees
3. Unique Bitcoin address generated for the order
4. Order created in Firestore with "awaiting_payment" status

### Payment Processing
1. Buyer sends Bitcoin to generated address
2. Cloud Function monitors blockchain for payment
3. Payment verification checks mempool and confirmed transactions
4. Order status updated to "paid" upon confirmation
5. Escrow funds held until order completion

### Order Fulfillment
1. Seller marks order as shipped (for physical products)
2. Buyer confirms receipt and satisfaction
3. Escrow funds released to seller
4. Order marked as completed
5. Review system unlocked for both parties

### Dispute Resolution
- Admin intervention for order disputes
- Escrow protection during dispute resolution
- Manual fund release by administrators when necessary

## Security Features

### Data Security
- **Firestore Security Rules** - Comprehensive rules protecting user data
- **Storage Security Rules** - Access control for file uploads
- **Input Validation** - Server-side validation of all user inputs
- **XSS Protection** - Content sanitization and secure rendering

### Payment Security
- **HD Wallet Security** - Secure key management for Bitcoin addresses
- **Transaction Verification** - Multiple verification steps for payments
- **Escrow Protection** - Funds held securely until order completion
- **Address Validation** - Validation of Bitcoin addresses before use

### Authentication Security
- **Firebase Auth** - Industry-standard authentication security
- **Email Verification** - Required email verification for new accounts
- **Session Management** - Secure token-based session handling
- **Password Security** - Firebase-managed password security

## Internationalization

The platform supports multiple languages with:
- **Translation System** - Custom i18n implementation
- **Language Switching** - User-selectable language preferences
- **Localized Content** - All UI text translated and localized
- **Currency Display** - Currency conversion based on user language (EUR for Italian, USD for English)

## Performance Optimizations

### Frontend Optimizations
- **Next.js Image Optimization** - Automatic image optimization and lazy loading
- **Code Splitting** - Automatic code splitting for optimal bundle sizes
- **Static Generation** - Pre-rendered pages for improved performance
- **Client-side Caching** - Efficient data caching strategies

### Backend Optimizations
- **Firestore Indexes** - Optimized database queries with composite indexes
- **Function Optimization** - Efficient Cloud Functions with minimal cold starts
- **Image Processing** - Server-side image optimization before storage
- **CDN Delivery** - Fast content delivery through Firebase CDN

## Deployment

### Frontend Deployment
- **Vercel Platform** - Automated deployments from Git repository
- **Environment Variables** - Secure configuration management
- **Build Optimization** - Optimized production builds
- **Domain Configuration** - Custom domain setup with SSL

### Backend Deployment
- **Firebase Functions** - Serverless function deployment
- **Firestore Rules** - Database security rules deployment
- **Storage Rules** - Storage security rules deployment
- **Index Management** - Firestore index deployment

## Development Workflow

### Local Development
- **Next.js Dev Server** - Hot reload development server
- **Firebase Emulators** - Local Firebase emulation for testing
- **TypeScript** - Type checking and development tooling
- **ESLint** - Code quality and consistency checks

### Testing
- **Manual Testing** - Comprehensive manual testing workflows
- **Firebase Emulator Testing** - Local testing with Firebase emulators
- **Payment Testing** - Testnet Bitcoin for payment flow testing

## API Integrations

### External APIs
- **Bitcoin Blockchain APIs** - Mempool and blockchain data
- **Exchange Rate APIs** - Real-time cryptocurrency exchange rates
- **Email Service APIs** - Transactional email delivery
- **AI Service APIs** - Chatbot and AI assistance

### Internal APIs
- **Next.js API Routes** - Server-side API endpoints
- **Firebase Functions** - Cloud Functions API endpoints
- **Firestore REST API** - Database access through Firebase SDK

## Future Considerations

This platform is designed with scalability and extensibility in mind:
- **Modular Architecture** - Easy to extend with new features
- **Scalable Infrastructure** - Firebase's auto-scaling capabilities
- **Payment Flexibility** - Architecture supports additional payment methods
- **International Expansion** - Multi-language foundation for global expansion

## License

This project is currently in active development. For licensing information, please contact the project maintainers.

---

*This documentation provides an overview of the CryptoGeek Store platform architecture and features. For specific implementation details or technical support, please refer to the main project repository or contact the development team.*

